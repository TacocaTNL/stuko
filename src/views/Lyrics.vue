<template>
    <div class="container">
        <h2>{{song.title}}</h2>
        <h4><span v-for="(artist, index) in song.artists" :key="index">{{nameWithComma(index)}}</span></h4>
        <p> {{song.lyrics}}</p>
    </div>
</template>

<style scoped>
p {
    text-align: left;
    white-space: pre-wrap;
}
</style>

<script>
export default {
    name: "Lyrics",
    data() {
        return {
            song: []
        }
    },
    methods: {
        async fetchSong(id) {
            const res = await fetch(`../api/songs/${id}`);
            const data = await res.json();

            return data;
        },
        nameWithComma(index){
            if (index !== this.song.artists.length-1) {
                return `${this.song.artists[index]}, `
            } else {
                return this.song.artists[index]
            }
        }
    },
    async created() {
        const songId = await this.$route.params.songId
        this.song = await this.fetchSong(songId)
    }
}
</script>