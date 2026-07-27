// ========================================
// PLAYERS DATABASE
// ========================================

const playersData = {

    salah: {

        name: "MOHAMED SALAH",

        goals: "400+",
        trophies: "32+",
        awards: "25+",
        fans: "100M+",

        aboutText:
            "Mohamed Salah Ghaly has shattered records across Europe. Known for his clinical finishing, dribbling and incredible consistency, he continues to lead Liverpool and Egypt to historic milestones.",

        playerImage: "https://cdn.mos.cms.futurecdn.net/yTtHtWgAWoiyTDPUQ52Lg5.jpg",
        aboutImage: "https://i.pinimg.com/1200x/e9/c9/db/e9c9dbff2425b1d3620825df6b928737.jpg"

    },


    messi: {

        name: "LIONEL MESSI",

        goals: "838+",
        trophies: "44",
        ballon: "8×",

        playerImage: "https://www.pinterest.com/pin/720998221601789267/"

    },


    ronaldo: {

        name: "CRISTIANO RONALDO",

        goals: "900+",
        trophies: "35",
        ballon: "5×",

        playerImage: "images/ronaldo.jpg"

    }

};


// ========================================
// SELECT PLAYER
// ========================================

function selectPlayer(playerName) {

    const salahSong = document.getElementById("salahSong");

    const player = playersData[playerName];

    const selectionScreen =
        document.getElementById("selectionScreen");

    const mainWebsite =
        document.getElementById("mainWebsite");


    // Hide all player layouts

    document
        .querySelectorAll(".player-layout")
        .forEach(layout => {

            layout.classList.add("hidden");

        });


    // Show selected layout

    const targetLayout =
        document.getElementById(`${playerName}Layout`);

    if (targetLayout) {

        targetLayout.classList.remove("hidden");

    }


    // Update top bar

    document
        .getElementById("topPlayerName")
        .textContent = player.name;

        // STOP SONG FIRST
salahSong.pause();
salahSong.currentTime = 0;


// PLAY ONLY FOR SALAH
if (playerName === "salah") {

    salahSong.play().catch(error => {
        console.log("Audio playback blocked:", error);
    });

}


    // SALAH

    if (playerName === "salah") {

        document
            .getElementById("salahHeroImg")
            .src = player.playerImage;

        document
            .getElementById("salahAboutImg")
            .src = player.aboutImage;

        document
            .getElementById("salahGoals")
            .textContent = player.goals;

        document
            .getElementById("salahTrophies")
            .textContent = player.trophies;

        document
            .getElementById("salahAwards")
            .textContent = player.awards;

        document
            .getElementById("salahFans")
            .textContent = player.fans;

        document
            .getElementById("salahAboutText")
            .textContent = player.aboutText;

    }


    // MESSI

    else if (playerName === "messi") {

        document
            .getElementById("messiHeroImg")
            .src="https://i.pinimg.com/1200x/41/07/4b/41074b049b6bc36c1ce0c216bab8e88c.jpg"

        document
            .getElementById("messiGoals")
            .textContent = player.goals;

        document
            .getElementById("messiTrophies")
            .textContent = player.trophies;

        document
            .getElementById("messiBallon")
            .textContent = player.ballon;

    }


   // RONALDO

else if (playerName === "ronaldo") {

    document
        .getElementById("ronaldoHeroImg")
        .src =
        "https://i.pinimg.com/1200x/87/28/fc/8728fcf5b451c2fc1bc0cd8091150903.jpg";

    document
        .getElementById("ronaldoGoals")
        .textContent = player.goals;

    document
        .getElementById("ronaldoTrophies")
        .textContent = player.trophies;

    document
        .getElementById("ronaldoBallon")
        .textContent = player.ballon;

}


    // Switch screens

    selectionScreen.classList.add("hidden");

    mainWebsite.classList.remove("hidden");


    // Start from top

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ========================================
// BACK TO SELECTION
// ========================================

function backToSelection() {

    const salahSong =
        document.getElementById("salahSong");


    // Stop Salah song
    if (salahSong) {

        salahSong.pause();

        salahSong.currentTime = 0;

    }


    document
        .getElementById("mainWebsite")
        .classList.add("hidden");


    document
        .getElementById("selectionScreen")
        .classList.remove("hidden");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ========================================
// SCROLL TO SECTION
// ========================================

function scrollToSection(sectionId) {

    const section =
        document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: 0.15

        }

    );


document
    .querySelectorAll(
        ".timeline-item, .skill, .photo-text-row, .video-card, .honor-card, .r-card"
    )
    .forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });