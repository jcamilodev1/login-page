<template>
  <div class="container">
    <section class="container__title">
      <h1>Buscar Pokémon</h1>
      <button @click="e => close()">Cerrar Sesión</button>
    </section>
    <section class="search-container">
      <input type="text" v-model="searchTerm" placeholder="Buscar" @keyup.enter="searchPokemon" />
    </section>

    <h2>Todos los Pokémon</h2>
    <section class="pokemon-grid">
      <article v-for="pokemon in allPokemon" :key="pokemon.name" class="pokemon-card">
        <div class="pokemon-name">{{ pokemon.name }}</div>
        <div class="pokemon-image">
          <img :src="pokemon.sprites.front_shiny" alt="">
        </div>
        <button class="add-favorite" @click="addFavorite(pokemon)" :disabled="isFavorite(pokemon)">
          Agregar a favoritos
        </button>
      </article>
    </section>

    <h2>Mis Favoritos</h2>
    <div class="pokemon-grid">
      <div v-for="favorite in favorites" :key="favorite.name" class="pokemon-card">
        <div class="pokemon-name">{{ favorite.name }}</div>
        <div class="pokemon-image">
          <img :src="favorite.sprites.front_shiny" alt="">
        </div>
        <button class="remove-favorite" @click="removeFavorite(favorite)">Eliminar de favoritos</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {useRouter} from 'vue-router'
import axios from 'axios';
const searchTerm = ref('');
const allPokemon = ref([]);
const favorites = ref([]);
const router = useRouter()

const getPokemons = async () => {
  const response = await axios.get('https://node-auth-96qz.onrender.com/api/dashboard');
  console.log(response.data.data)
  allPokemon.value = await response.data.data.pokemones;
};

const searchPokemon = async () => {
  try {
    if(searchTerm.value.trim() == ''){
      return
    }
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.value.toLowerCase()}`);
    const pokemon = response.data;
    allPokemon.value.unshift(pokemon);
  } catch (error) {
    console.error(error);
  }
};

const addFavorite = (pokemon) => {
  favorites.value.push(pokemon);
  saveFavorites();
};

const removeFavorite = (pokemon) => {
  favorites.value = favorites.value.filter(item => item.name !== pokemon.name);
  saveFavorites();
};

const isFavorite = (pokemon) => {
  return favorites.value.some(item => item.name === pokemon.name);
};

const saveFavorites = async () => {
  
};

const loadFavorites = async () => {

};
const close = () => {
  localStorage.removeItem('token')
  router.go(0)
}
onMounted(async () => {
  await getPokemons();
});
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.container__title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
h1, h2 {
  margin-top: 0;
}

.search-container {
  margin-bottom: 20px;
}

.search-container input {
  padding: 10px;
  width: 100%;
  font-size: 16px;
}

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.pokemon-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pokemon-name {
  margin-bottom: 10px;
  font-weight: bold;
}

.add-favorite, .remove-favorite {
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-favorite:disabled, .remove-favorite:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
