<script lang="ts">
    // Add your data fetching logic here
    const technologies = [
      { name: 'Apache Airflow', color: 'text-[#E4391C]', icon: '🌀', link: 'https://airflow.apache.org/' },
      { name: 'Supabase', color: 'text-[#3ECF8E]', icon: '🛢', link: 'https://supabase.io/' },
      { name: 'SvelteKit', color: 'text-[#FF3E00]', icon: '⚡', link: 'https://kit.svelte.dev/' },
      { name: 'Vercel', color: 'text-black dark:text-white', icon: '▲', link: 'https://vercel.com/' },
    ];
  
    // Mock data - replace with your actual data
    const players = [
      { id: 1, name: 'Player1', leaves: 3, last_updated: '2023-08-15', status: 'Online' },
      { id: 2, name: 'Player2', leaves: 5, last_updated: '2023-08-15', status: 'Offline' },
      // Add more players as needed
    ];
  </script>
  
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8">
    <header class="max-w-6xl mx-auto mb-16">
      <h1 class="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
        Dota 2 Player Tracker
      </h1>
      <p class="text-xl text-gray-300">
        Automated system tracking player leaves using Airflow + Supabase + SvelteKit
      </p>
      <p class="text-xl text-gray-300">
        This is a fun little project I made to track player leaves in Dota 2 and flex a little bit the technologies I use.
      </p>
    </header>
  
    <main class="max-w-6xl mx-auto space-y-16">
      <!-- Tech Stack Section -->
      <section class="glass-container p-8 rounded-2xl">
        <h2 class="text-3xl font-bold mb-6 text-purple-300">Tech Stack</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          {#each technologies as tech}
            <a href={tech.link} target="_blank" rel="noopener noreferrer" class="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition">
              <span class="text-2xl">{tech.icon}</span>
              <span class={`font-semibold ${tech.color}`}>{tech.name}</span>
            </a>
          {/each}
        </div>
      </section>
  
      <!-- Architecture Overview -->
      <section class="glass-container p-8 rounded-2xl">
        <h2 class="text-3xl font-bold mb-6 text-blue-300">System Architecture</h2>
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div class="p-6 bg-white/5 rounded-xl">
            <h3 class="text-xl font-bold mb-3">Data Collection</h3>
            <p class="text-gray-400">Airflow instance runs daily to gather player data</p>
          </div>
          <div class="p-6 bg-white/5 rounded-xl">
            <h3 class="text-xl font-bold mb-3">Data Storage</h3>
            <p class="text-gray-400">Supabase database securely stores all records</p>
          </div>
          <div class="p-6 bg-white/5 rounded-xl">
            <h3 class="text-xl font-bold mb-3">Visualization</h3>
            <p class="text-gray-400">SvelteKit frontend hosted on Vercel</p>
          </div>
        </div>
      </section>
      <!-- CTA Section -->
      <div class="text-center">
        <a href="/" class="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-bold hover:scale-105 transition-transform">
          🎮 View Live Demo
        </a>
      </div>
    </main>
  </div>
  
  <style>
    .glass-container {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    }
  </style>