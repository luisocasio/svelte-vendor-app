<script>
  import Button from "../components/Button.svelte";

  let username = "";
  let password = "";
</script>

<style>
  h2 {
    color: #ff3e00;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
</style>

<div class="form">
  <h2>Join the world of vendors</h2>
  <input />
  <input />
  <Button>Submit</Button>
</div>
