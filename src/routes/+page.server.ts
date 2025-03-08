// @ts-nocheck
import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data: players, error: playersError } = await supabase.from("players").select();
  
  if (playersError) {
    console.error('Error fetching players:', playersError);
  }

  const { data: leaves, error: leavesError } = await supabase.from("leaves")
  .select(`
    *,
    players:account_id (
      name
    )
  `);
  
  if (leavesError) {
    console.error('Error fetching leaves:', leavesError);
  }
  
  return {
    players: players ?? [],
    leaves: leaves ?? []
  };
}

async function getPlayerData(account_id) {
  try {
    const response = await fetch(`https://api.opendota.com/api/players/${account_id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.profile ? data.profile : null;
  } catch (error) {
    console.error('Error fetching player data:', error);
    return null;
  }
}

export const actions = {
    default: async ({ request }: { request: Request }) => {
      // Get form data
      const formData = await request.formData();
      
      const account_id = parseInt(formData.get('account_id') as string, 10);
      const player_data = await getPlayerData(account_id);
      const { personaname	, avatarfull, profileurl } = player_data;
      
      // Insert the record
      const { data, error } = await supabase
        .from('players')
        .insert([
          { account_id, name:personaname	, avatar_url: avatarfull, profile_url: profileurl }
        ])
        .select();
        
      if (error) {
        console.error('Error inserting record:', error);
        return fail(500, {
          success: false,
          message: 'Failed to add record'
        });
      }
      
      return {
        success: true,
        record: data[0]
      };
    }
  };