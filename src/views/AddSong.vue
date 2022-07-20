<template>
    <div class="container">
        <h2>Add Song</h2>
        <form class="col-md-6 offset-md-3 needs-validation" v-on:submit="submit" novalidate> 
            <div class="mb-3">
                <label for="inputTitle" class="form-label">Titel</label>
                <input type="text" v-model="title" class="form-control" id="inputTitle" required autofocus>
                <div class="invalid-feedback">
                    Voeg een titel toe.
                </div>
            </div>
            <div class="mb-3" v-for="(artist, index) in artists" :key="index">
                <label for="inputArtists" class="form-label">Artiest {{index+1}}</label>
                <input type="text" v-model="artists[index]" :name="`artists[${index}]`" class="form-control" id="inputArtists" required>
                <div class="invalid-feedback">
                    Voeg ten minste 1 artiest toe.
                </div>
            </div>
            <div class="mb-3">
                <button type="button" @click="addArtist" class="btn btn-link">+ Voeg artiest toe</button>
            </div>
            <div class="mb-3">
                <label for="inputLyrics" class="form-label">Tekst</label>
                <textarea v-model="lyrics" name="inputLyrics" id="inputLyrics" rows="20" class="form-control" required></textarea>
                <div class="invalid-feedback">
                    Voeg songtekst toe.
                </div>
            </div>
            <div class="d-grid col-6 mx-auto">
                <button type="submit" class="btn btn-primary">Voeg toe</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "AddSong",
    data() {
        return  {
            title: '',
            artists: [''],
            lyrics: ''
        }
    },
    methods: {
        addArtist() {
            this.artists.push('')
        },
        async submit() {
            const submit = {
                title: this.title,
                artists: this.artists.filter(e => e),
                lyrics: this.lyrics
            }


             const res = await fetch('/api/songs', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(submit)
             })

             await res.json()
        }
    }
}
</script>