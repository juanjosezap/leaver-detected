<script>
  import { enhance } from '$app/forms';
  
  let { data, form } = $props();
</script>


<div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8 flex flex-col items-center">
  <h1 class="text-3xl font-bold mb-6">Leaver Detected</h1>
  <!-- Form -->
  <form use:enhance method="POST" class="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h3 class="text-1xl mb-6">Add Player to track</h3>
      <div class="mb-4">
          <label for="account_id" class="block text-sm font-medium">Account ID</label>
          <input type="text" 
            id="account_id"
            name="account_id"
            class="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
      </div>
      <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition">
          Add Player
      </button>
  </form>

  <h2 class="text-2xl font-bold mt-8">Players</h2>
  <!-- Table -->
  <div class="w-full max-w-2xl mt-8">
      <table class="w-full border-collapse border border-gray-700">
          <thead>
              <tr class="bg-gray-800">
                  <th class="p-3 text-left">Account ID</th>
                  <th class="p-3 text-left">Name</th> 
                  <th class="p-3 text-left">Avatar</th>
                  <th class="p-3 text-left">Profile</th>
              </tr>
          </thead>
          <tbody>
              {#each data.players as player}
              <tr class="border-t border-gray-700 hover:bg-gray-800">
                  <td class="p-3">{player.account_id}</td>
                  <td class="p-3">{player.name}</td>
                  <td class="p-3"><a href={player.avatar_url} target="_blank" rel="noopener noreferrer"><img src={player.avatar_url} alt="Avatar" class="w-8 h-8 rounded-full"></a></td>
                  <td class="p-3"><a href={player.profile_url} target="_blank" rel="noopener noreferrer">Profile</a></td>
              </tr>
              {/each}
          </tbody>
      </table>
  </div>

  <h2 class="text-2xl font-bold mt-8">Leaves</h2>
  <!-- Table -->
  <div class="w-full max-w-2xl mt-8">
      <table class="w-full border-collapse border border-gray-700">
          <thead>
              <tr class="bg-gray-800">
                  <th class="p-3 text-left">Player</th>
                  <th class="p-3 text-left">Match ID</th>
                  <th class="p-3 text-left">Date</th>
              </tr>
          </thead>
          <tbody>
              {#each data.leaves as leave}
              <tr class="border-t border-gray-700 hover:bg-gray-800">
                  <td class="p-3">{leave.players.name}</td>
                  <td class="p-3"><a href={`https://www.dotabuff.com/matches/${leave.match_id}`} target="_blank" rel="noopener noreferrer">{leave.match_id}</a></td>
                  <td class="p-3">{leave.date}</td>
              </tr>
              {/each}
          </tbody>
      </table>
  </div>
</div>
