<script>
  // your script goes here
  import Navigation from "../components/Navigation.svelte";
  import { Router, link } from "svelte-routing";
</script>

<style>
  /* your styles go here */
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 2rem;
    line-height: 2.5rem;
    color: white;
  }
  .banner-container {
    background-image: url("/images/hero-banner.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    min-height: 48rem;
  }
  .immediate-actions {
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 25%;
    padding-top: 2.5rem;
    padding-left: 2.5rem;
  }
  .action-buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding-top: 5rem;
  }
  button {
    height: 52px;
    width: 302px;
    margin-top: 2rem;
    margin-left: 1rem;
    border-radius: 5px;
    opacity: 0.9;
    background-color: crimson;
    color: white;
  }
  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    clear: both;
    background-color: crimson;
  }
</style>

<div class="banner-container">
  <Navigation />

  <div class="immediate-actions">
    <p>
      Finally , A Way For Vendors and Lovers of Food to Come Together in Harmony
    </p>
    <div class="action-buttons">

      <Router>
        <a href="/register" use:link register>
          <button>Join Us</button>
        </a>

        <a href="/login" use:link login>
          <button>Login</button>
        </a>
      </Router>
    </div>
  </div>
</div>

<h1>Under construction!</h1>

<footer>Welcome from vendors all around you.</footer>
