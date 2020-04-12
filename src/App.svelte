<script>
  import { Router, Route } from "svelte-routing";
  import Landing from "./Pages/Landing.svelte";
  import Register from "./Pages/Register.svelte";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>

  <Router>
    <Route path="/">
      <Landing />
    </Route>
    <Route path="/register" component={Register}>
      <Register />
    </Route>
  </Router>
</main>
