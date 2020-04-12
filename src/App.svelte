<script>
  import Footer from "./components/Footer.svelte";
  import { Router, Route } from "svelte-routing";
  import Landing from "./Pages/Landing.svelte";
  import Register from "./Pages/Register.svelte";

  let url = "";
</script>

<style>
  main {
    text-align: center;
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
  <Router {url}>
    <Route exact path="/">
      <Landing />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </Router>
  <Footer />
</main>
