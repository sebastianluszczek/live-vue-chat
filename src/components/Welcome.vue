<template>
  <div class="welcome container">
    <div class="row">
      <div class="col s12 m8 l6 offset-m2 offset-l3">
        <div class="card mt-3">
          <div class="card-content center-align">
            <h2 class="teal-text">Welcome</h2>
            <form v-on:submit.prevent="enterChat()">
              <label for="name">Enter your name:</label>
              <input type="text" name="name" v-model="name">
              <p class="red-text" v-if="feedback">{{feedback}}</p>
              <button class="btn teal mt-2">Enter Chat</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: null,
      feedback: null
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.feedback = "You must enter a name to join";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mt-3 {
  margin-top: 3rem;
}
.mt-2 {
  margin-top: 2rem;
}
</style>
