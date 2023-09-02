<script lang="ts">
  import { Game, act1 } from "$lib";

  const game = new Game();
  const uyicam = new Audio("uyicam.mp3");
</script>

<div class="ui container" style="padding-top: 2rem">
  <div class="ui raised very padded text container segment">
    <div class="ui image label">
      <img src="barisay.png" alt="Barisay" /> Barisay
    </div>

    <div class="ui horizontal divider">Stats</div>
    <p>{game.hp} / 100 - HP</p>
    <p>{game.sanity} / 100 - Sanity</p>
  </div>

  <div class="ui raised text container segment">
    <img class="ui medium image" src="barisay.png" />
  </div>

  <div class="ui raised very padded text container segment">
    <p>{game.currentDialog.text}</p>
    <div class="ui section horizontal divider">Actions</div>
    <div class="ui buttons" style="align-items: center;">
      {#each game.currentDialog.routes as route, i}
        <button
          on:click={() => {
            game.currentDialog = act1[route.next];
            uyicam.play();
            game.sanity -= 5;
          }}
          class="ui button">{route.choice}</button
        >
        {#if i < game.currentDialog.routes.length - 1}
          <div class="or" />
        {/if}
      {/each}
    </div>
  </div>
</div>
