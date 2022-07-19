<template>
    <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">{{song.title}}</div>
            <span :key="index" v-for="(artist, index) in song.artists">
            {{nameWithComma(index)}}
            </span>
        </div>
    </li>
</template>

<script>
export default {
    name: 'SongItem',
    props: {
        song: Object
    },
    methods: {
        nameWithComma(index){
            if (index !== this.song.artists.length-1) {
                return `${this.song.artists[index]}, `
            } else {
                return this.song.artists[index]
            }
        }
    }
}
</script>