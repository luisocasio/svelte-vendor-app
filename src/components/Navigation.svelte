<script>
  import { Router, link } from "svelte-routing";
</script>

<style>
  a {
    text-decoration: none;
    color: white;
  }
  nav {
    display: flex;
    justify-content: space-around;
    padding-top: 2rem;
    font-size: 1.2rem;
  }
  .center-anchors {
    width: 300px;
    display: flex;
    justify-content: space-around;
  }
</style>

<Router>
  <nav>
    <div>
      <a href="/">MarketVendor</a>
    </div>

    <div class="center-anchors">
      <a href="/food" use:link food>Food</a>
      <a href="/services" use:link services>Services</a>
      <a href="/about" use:link about>About</a>
    </div>

    <div>
      <a href="/support">Support</a>
    </div>
  </nav>
</Router>
