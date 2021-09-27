function fight() {
  let monster = prompt("Name your monster?");
  let hero = prompt("Name your hero?");

  let villainHealth = 50;
  let heroHealth = 50;

  let i = 1;

  while (villainHealth > 0 && heroHealth > 0) {
    let herodice = Math.floor(Math.random() * 20 + 1);
    let monsterdice = Math.floor(Math.random() * 20 + 1);

    if (i % 2 === 0) {

      if (monsterdice === 1 || monsterdice === 2) {
        villainHealth -= 5;

        alert(`Critical failure! ${monster} accidentally stabs self!`);
        alert(
          `${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`
        );
      } else if (monsterdice >= 3 && monsterdice <= 10) {
        heroHealth -= 0;

        alert(`${monster} misses!`);
        alert(
          `${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`
        );
      } else if (monsterdice >= 11 && monsterdice <= 18) {
        heroHealth -= 10;

        alert(`Hit! ${monster} strikes ${hero}!`);
        alert(
          `${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`
        );
      } else {
        heroHealth -= 20;

        alert(`Critical hit! ${monster} does double damage!`);
        alert(
          `${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`
        );
      }
    } else {
      if (herodice === 1 || herodice === 2) {
        heroHealth -= 5;

        alert(`Critical failure! ${heroName} accidentally stabs self!`);
      } else if (herodice >= 3 && herodice <= 10) {
        villainHealth -= 0;

        alert(`${hero} misses!`);
      } else if (herodice >= 11 && herodice <= 18) {
        villainHealth -= 10;
        alert(`Hit! ${hero} strikes ${monster}!`);
      } else {
        villainHealth -= 20;
        alert(`Critical hit! ${hero} does double damage!`);
      }
    }

    i++;
  }
  if (villainHealth <= 0 && heroHealth <= 0) {
    alert(`Both ${hero} & ${monster} loses`);
  } else if (villainHealth < heroHealth) {
    alert(`${hero} wins`);
  } else {
    alert(`${monster} wins`);
  }

  let answer = prompt("Would you like to play again? Type yes or no");

  if (answer === "yes") {
    fight();
  } else if (answer === "no") {
    alert(`Thank you for playing the game!`);
  } else {
    answer = prompt("Invalid input, type yes or no");
  }
}
fight();