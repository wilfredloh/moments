console.log("script.js ready!");

window.onload = () => {

    $(function () {
        count = 0;
        
        var set = setInterval(function () {
          let num = Math.floor(Math.random()*wordsArray.length) 
          $("#word").fadeOut(400, function () {
            $(this).text(wordsArray[num]).fadeIn(400);
          });
        }, 2500);

        if (window.location.href.includes('edit')) {
          clearInterval(set);
        }
      });

    $('#myInput').on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".indexCardWrap").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $(function() {
    // Sidebar toggle behavior
        $('#sidebarCollapse').on('click', function() {
            $('#sidebar, #content').toggleClass('active');
        });
    });

    $(function () {
    $('[data-toggle="popover"]').popover()
    })
    
    $('.popover-dismiss').popover({
    trigger: 'focus'
    })
};


// WORDS ARRAY JSON
let wordsArray = [
    "Accomplished",
    "Active",
    "Adored",
    "Adventurous",
    "Affectionate",
    "Amusing",
    "Appreciated",
    "Arrogant",
    "Astonished",
    "Awestruck",
    "Blissful",
    "Breathtaking",
    "Bright",
    "Brilliant",
    "Bubbling",
    "Calming",
    "Celestial",
    "Charming",
    "Cheerful",
    "Cherished",
    "Chilled",
    "Comical",
    "Confident",
    "Courageous",
    "Crazy",
    "Dazzling",
    "Delicate",
    "Delightful",
    "Desirable",
    "Devoted",
    "Dramatic",
    "Dumbstruck",
    "Exciting",
    "Elated",
    "Elegant",
    "Enchanted",
    "Energetic",
    "Emotional",
    "Ethereal",
    "Exaggerated",
    "Expressive",
    "Faint",
    "Fantastical",
    "Favorable",
    "Fiery",
    "Floating",
    "Flying",
    "Fond",
    "Forgiving",
    "Freakin' awesome",
    "Frenzied",
    "Friendly",
    "Frosted",
    "Funny",
    "Furry",
    "Gaping",
    "Gentle",
    "Giddy",
    "Glacial",
    "Gladness",
    "Gleaming",
    "Gleeful",
    "Gorgeous",
    "Graceful",
    "Grateful",
    "Halting",
    "Happy",
    "Haunting",
    "Heavenly",
    "Hidden",
    "High-spirited",
    "Hopeful",
    "Humble",
    "Hushed",
    "Hypnotic",
    "Illuminated",
    "Immense",
    "Inflated",
    "Innocent",
    "Inspiring",
    "Intimate",
    "Jagged",
    "Joking",
    "Joyful",
    "Jubilant",
    "Larger than life",
    "Laughable",
    "Lighthearted",
    "Lively",
    "Lofty",
    "Lovely",
    "Luminescent",
    "Lush",
    "Luxurious",
    "Magical",
    "Masterful",
    "Merry",
    "Mischievous",
    "Misty",
    "Moonlit",
    "Mysterious",
    "Mystical",
    "Nostalgic",
    "On fire",
    "Partying",
    "Playful",
    "Poignant",
    "Posh",
    "Powerful",
    "Pretty",
    "Prideful",
    "Princesslike",
    "Proud",
    "Puzzled",
    "Quiet",
    "Rejoicing",
    "Relaxed",
    "Reminiscent",
    "Repentant",
    "Reserved",
    "Ridiculous",
    "Sarcastic",
    "Sensitive",
    "Serene",
    "Shaking",
    "Shining",
    "Silly",
    "Sweet",
    "Simple",
    "Singing",
    "Skipping",
    "Smooth",
    "Sneaky",
    "Soaring",
    "Sophisticated",
    "Sparkling",
    "Spell-like",
    "Spherical",
    "Splashing",
    "Splendid",
    "Spooky",
    "Sprinting",
    "Starlit",
    "Starry",
    "Startling",
    "Successful",
    "Summery",
    "Surprised",
    "Sympathetic",
    "Teasing",
    "Tender",
    "Thoughtful",
    "Thrilling",
    "Tingling",
    "Tinkling",
    "Tongue-in-cheek",
    "Touching",
    "Tranquil",
    "Treasured",
    "Trembling",
    "Triumphant",
    "Twinkling",
    "Unforgettable",
    "Velvety",
    "Victorious",
    "Vigorous",
    "Wild",
    "Witty",
    "Wondering",
    "Zealous",
    "Zestful"
    ]