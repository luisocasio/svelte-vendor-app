<script>
  import Button from "../components/Button.svelte";

  let username = "";
  let password = "";
</script>

<style>
  h2 {
    color: #ff3e00;
  }
  .form-wrapper {
    display: flex;
    justify-content: center;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>

<div class="form-wrapper">
  <div class="form">
    <h2>Join the world of vendors</h2>
    <input placeholder="username" />
    <input placeholder="password" />
    <Button>Submit</Button>
  </div>
</div>
