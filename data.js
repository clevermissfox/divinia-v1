const allOptions = [
  {
    id: 1,
    scene: "Sunlit Path",
    description:
      "...illuminated by golden rays that seem to pulse with optimistic energy.",
    nextOptions: [
      {
        id: 11,
        scene: "Traveler's Tent",
        description: "...whose sun-bleached canvas glows with golden light.",
        nextOptions: [
          {
            id: 111,
            scene: "Worn leather-bound journal",
            description:
              "...its pages softened by time and filled with countless tales. The leather cover bears the marks of many journeys.",
            pathID: 111111,
          },
          {
            id: 112,
            scene: "Hand-woven tapestry",
            description:
              "...catches the filtered sunlight, its intricate patterns shifting with subtle meaning. The threads shimmer with rich colors that seem to move as you watch.",
            pathID: 111112,
          },
          {
            id: 113,
            scene: "Divination tools",
            description:
              "...gleaming with purpose in the golden light, promising insights into the hidden currents of your path and glimpses of potential futures.",
            pathID: 111113,
          },
        ],
      },
      {
        id: 12,
        scene: "Artisan's Workshop",
        description:
          "...whose wooden door stands invitingly open, tools and materials visible within.",
        nextOptions: [
          {
            id: 121,
            scene: "Bow and arrow",
            description:
              "...of fine craftsmanship gleam on the workbench, radiating focused intent.",
            pathID: 112121,
          },
          {
            id: 122,
            scene: "Paints and brushes",
            description:
              "...lie arranged on a table, their colors alive in the forge-light.",
            pathID: 112122,
          },
          {
            id: 123,
            scene: "Musical instrument",
            description:
              "...stands in the corner, its strings aglow, poised to be played.",
            pathID: 112123,
          },
        ],
      },
      {
        id: 13,
        scene: "Scholar's Caravan",
        description:
          "...whose open doorway revealing shelves lined with books and scrolls.",
        nextOptions: [
          {
            id: 131,
            scene: "Ancient map",
            description: "...revealing unknown lands of mystery.",
            pathID: 113131,
          },
          {
            id: 132,
            scene: "Magnifying glass",
            description:
              "...sits on a velvet cushion, dispersing light in mysterious patterns.",
            pathID: 113132,
          },
          {
            id: 133,
            scene: "Quill and ink",
            description:
              "...set on a small writing desk, the ink shimmering with possibility.",
            pathID: 113133,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    scene: "Moonlit Grove",
    description: "...bathed in silver light-where shadows hold secrets.",
    nextOptions: [
      {
        id: 11,
        scene: "Crystal Pool",
        description:
          "...beckons, its surface mirror-smooth and reflecting the moon in mesmerizing patterns.",
        nextOptions: [
          {
            id: 111,
            scene: "Smooth, polished stone",
            description:
              "...glints beneath the water's surface, pulsing with inner moonlight.",
            pathID: 211111,
          },
          {
            id: 112,
            scene: "Dreamcatcher",
            description:
              "...sways in the misty air, its web gathering moonbeams like dew.",
            pathID: 211112,
          },
          {
            id: 113,
            scene: "Vial of fragrant oil",
            description:
              "...shimmers with pearlescent colors that mirror the pool.",
            pathID: 211113,
          },
        ],
      },
      {
        id: 12,
        scene: "Whispering Falls",
        description:
          "...cascade nearby, its silver waters creating a veil of mist that glows in the moonlight, carrying whispered secrets.",
        nextOptions: [
          {
            id: 121,
            scene: "Feather",
            description:
              "...floats impossibly in the mist, its silver-tipped edges dancing with moonlight.",
            pathID: 212121,
          },
          {
            id: 122,
            scene: "Seashell",
            description:
              "...gleams with pearlescent light, its spiral form echoing the falls' eternal song.",
            pathID: 212122,
          },
          {
            id: 123,
            scene: "Wildflower",
            description:
              "...blooms in the moonlight, its petals luminous with otherworldly radiance.",
            pathID: 212123,
          },
        ],
      },
      {
        id: 13,
        scene: "Ancient Tree",
        description:
          "...rises against the starlit sky, its massive trunk and sprawling branches emanating an aura of wisdom.",
        nextOptions: [
          {
            id: 131,
            scene: "Fertile soil",
            description:
              "...glows with moonlit potential, dark and rich with ancient power.",
            pathID: 213131,
          },
          {
            id: 132,
            scene: "Bark with symbolic carving",
            description:
              "...pulses with silvery light, its mysterious patterns shifting in the shadows.",
            pathID: 213132,
          },
          {
            id: 133,
            scene: "Bird's nest",
            description:
              "...woven from moonbeams rests in a hollow, gleaming with protective energy.",
            pathID: 213133,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    scene: "Starry Ascent",
    description:
      "...spiraling upward, illuminated by stars that seem close enough to touch.",
    nextOptions: [
      {
        id: 11,
        scene: "Observatory",
        description:
          "...stands proud against the star-filled sky, its great dome open to the cosmos above.",
        nextOptions: [
          {
            id: 111,
            scene: "Telescope",
            description:
              "...of polished brass and crystal , its lens aimed at the infinite cosmos.",
            pathID: 311111,
          },
          {
            id: 112,
            scene: "Star chart",
            description:
              "...glows with its own inner light, constellations shifting across its surface.",
            pathID: 311112,
          },
          {
            id: 113,
            scene: "Meteorite",
            description:
              "...pulses with otherworldly energy, reflecting starlight like a captured galaxy.",
            pathID: 311113,
          },
        ],
      },
      {
        id: 12,
        scene: "Library",
        description:
          "...shimmers with otherworldly light, its windows alive with shifting constellations.",
        nextOptions: [
          {
            id: 121,
            scene: "Book of philosophy",
            description:
              "...bound in worn leather, its pages glowing with cosmic insight.",
            pathID: 312121,
          },
          {
            id: 122,
            scene: "Scroll with ancient script",
            description:
              "...floats in the air, inscribed with symbols shifting like living constellations.",
            pathID: 312122,
          },
          {
            id: 123,
            scene: "Blank journal",
            description:
              "...waits expectantly, its pristine pages shimmering with possibility.",
            pathID: 312123,
          },
        ],
      },
      {
        id: 13,
        scene: "Sage's Hermitage",
        description:
          "...floats serenely among the stars, paper lanterns glowing like newly born stars.",
        nextOptions: [
          {
            id: 131,
            scene: "Cup of herbal tea",
            description:
              "...steams on a low table, its aromatic vapors spiraling upward.",
            pathID: 313131,
          },
          {
            id: 132,
            scene: "Meditation cushion",
            description:
              "...rests in a pool of starlight, worn smooth by years of peaceful contemplation.",
            pathID: 313132,
          },
          {
            id: 133,
            scene: "Wooden comb",
            description:
              "..lies on a silk cloth, its teeth carved with celestial symbols that seem to shift in the light.",
            pathID: 313133,
          },
        ],
      },
    ],
  },
];

export default allOptions;

const narratives = [
  {
    pathID: 0,
    narrative:
      "You stand on an ancient stone platform, its surface etched with glowing zodiacal symbols. Above, the cosmos shows an impossible view - the sun blazes in one direction, a full moon hangs in another, and an infinite field of stars sparkles in the third. Three distinct paths stretch before you.",
    tagline: "Which celestial path beckons to your spirit?",
  },
  {
    pathID: 1,
    narrative:
      "As you follow the Sunlit Path, golden light embraces you. Tiny motes of light dance around you as you walk forward. The path opens into a clearing where three distinct destinations await.",
    tagline: "Which sanctuary calls to you?",
  },
  {
    pathID: 2,
    narrative:
      "Silvery moonlight filters through towering trees. The grove thrums with quiet energy, where shadows dance at the corner of your vision and the air feels thick with possibility. Luminescent flowers dot the landscape like earthbound stars, while the rustle leaves creates an ethereal melody.",
    tagline: "Before you, three paths emerge through the silvered mist...",
  },
  {
    pathID: 3,
    narrative:
      "A crystalline stairway spirals upward into the infinite cosmos, each step shimmering with starlight. Constellations wheel overhead in impossible patterns, while shooting stars trace luminous paths through the void. The very air sparkles with cosmic energy, and each breath fills you with the vastness of space and the mysteries of the universe.",
    tagline: "Three structures appear along the celestial path...",
  },
  {
    pathID: 111,
    narrative:
      "Drawing aside the shimmering tent flap, you enter a space that defies dimensions - somehow both intimate and infinite. Incense spirals through air thick with mystery, carrying whispers of desert caravans and forgotten temples. Threads of gold catch lamplight like captured stars. Inside, three objects catch your attention, each seeming to hold its own story.",
    tagline: "Which of these three treasures draws you to explore it further?",
  },
  {
    pathID: 112,
    narrative:
      "Directly ahead stands the Artisan's Workshop, its wide doors revealing a space alive with activity. The rhythmic sound of hammer on anvil mingles with the scent of fresh-cut wood and heated metal. Rays of sunlight illuminate floating wood shavings and metallic dust, while half-finished creations line the walls. This is a place where raw materials transform into objects of power and beauty.",
    tagline:
      "From this mystical vantage point, three distinct paths stretch before you...",
  },
  {
    pathID: 113,
    narrative:
      "Stepping into the caravan, you enter a world of organized wonder. Scrolls and charts cascade from ceiling to floor, while brass instruments and delicate measuring tools gleam from wooden shelves. Glass cabinets hold curiosities from distant lands, and the air carries the comforting scent of old parchment and fragrant tea. Star charts and maps carpet every surface, their annotations hinting at undiscovered mysteries.",
    tagline:
      "Within this sanctuary of knowledge, three items draw your attention...",
  },
  {
    pathID: 211,
    narrative:
      "The surface of the crystal pool is so still it appears solid in the moonlight. Iridescent mist hovers just above the water, creating halos around stones that circle the pool like ancient sentinels. The air feels charged with energy, while the depths of the pool shimmer and glow.",
    tagline: "At the pool's edge, three objects catch the moonlight...",
  },
  {
    pathID: 212,
    narrative:
      "Silvery water cascades down moonlit rocks, creating a veil of luminous mist that carries whispered echoes of ancient secrets. The falls sing with voices beyond comprehension, while a pool at the base swirls with ethereal patterns, reflecting fragments of wisdom.",
    tagline: "Near the falls, three gifts present themselves...",
  },
  {
    pathID: 213,
    narrative:
      "A colossal tree rises into the night sky, its ancient trunk wider than a house. Moonlight filters through its vast canopy, creating shifting patterns on the ground like liquid silver. Luminous moss spirals up its bark in mysterious glowing symbols. Even the shadows here feel alive with stored memories.",
    tagline: "Among the tree's roots, three treasures reveal themselves...",
  },
  {
    pathID: 311,
    narrative:
      "The domed Observatory hums with cosmic energy, its circular chamber alive with projected constellations. Brass mechanisms whir and click, tracking celestial bodies across the infinite void above. Through the open dome, stars seem close enough to touch, while the curved walls display illuminated maps of distant galaxies and mysterious astronomical phenomena.",
    tagline: "Three tools of celestial study catch your eye...",
  },
  {
    pathID: 312,
    narrative:
      "Shelves laden with books spiral through the star-filled space. Constellations drift between the stacks like luminous bookmarks, while nebulae curl through reading nooks like cosmic incense. The air hums with centuries of celestial wisdom gathering like stardust.",
    tagline: "Three items hover before you...",
  },
  {
    pathID: 313,
    narrative:
      "Perched among the stars, the hermitage seems to float in celestial space. Its simple wooden structure radiates peaceful energy, with paper lanterns casting warm light through translucent walls. Wind chimes sing softly, while aromatic herbs and incense create an atmosphere of tranquil contemplation. The space feels both ancient and timeless.",
    tagline: "Within the hermitage, three items await your attention...",
  },
];

const results = [
  {
    pathID: 111111,
    horoscope:
      "Your journey along the sunlit path has brought you to a traveler's tent, where you've been drawn to a worn leather-bound journal;  cosmos are calling you to embark on a journey of self-discovery and exploration. Your choices reflect a thirst for knowledge and a desire to connect with diverse cultures and perspectives. The worn journal you selected symbolizes the importance of documenting your experiences and reflecting on your journey.\nWith Jupiter, your ruling planet, forming a harmonious trine with Uranus, the planet of innovation, you're being encouraged to step outside your comfort zone and embrace new experiences. This is a time for broadening your horizons, both physically and intellectually. Travel, education, and cultural exchange are highly favored at this time.The current lunar cycle highlights your third house of communication and short-distance travel. This could manifest as opportunities to connect with people from different backgrounds, learn new languages, or explore your local community with fresh eyes.",
  },
  {
    pathID: 111112,
    horoscope:
      "Your journey along the sunlit path has led you to a traveler's tent, where you've been drawn to a beautifully hand-woven tapestry. This choice reflects your ability to see the bigger picture of your life's journey and appreciate how each experience weaves into a greater whole. With Jupiter, your ruling planet, forming a harmonious aspect to Venus, the planet of art and beauty, you're being called to recognize the artistry in your life's journey.\nThe tapestry you've chosen symbolizes the intricate way your various experiences and adventures are interconnecting. This is a time to step back and appreciate the pattern that's emerging from your choices and experiences. The current lunar cycle highlights your seventh house of relationships and partnerships, suggesting that collaborative efforts will be particularly rewarding.",
  },
  {
    pathID: 111113,
    horoscope:
      "Your journey along the sunlit path has brought you to a traveler's tent, where you've been drawn to a set of mysterious divination tools. This choice reflects your natural affinity for exploring the unknown and seeking deeper wisdom. With Jupiter, your ruling planet, in a powerful alignment with Pluto, the planet of transformation, you're being called to tap into your intuitive abilities and trust your inner guidance.\nThe divination tools you've chosen suggest that you're ready to access higher wisdom and explore the hidden potential in your future. This is a time when your natural optimism combines with deep insight, allowing you to make decisions that align with your highest path. The current lunar cycle highlights your ninth house of wisdom and expansion, amplifying your ability to see beyond the obvious and trust your intuitive hunches.",
  },
  {
    pathID: 112121,
    horoscope:
      "Your journey along the sunlit path has led you to a brightly lit artisan's workshop, where you've chosen a finely crafted bow and arrow. This symbolizes your focused pursuit of goals and the precision with which you aim for your ambitions. With Jupiter, your ruling planet, in a dynamic aspect to Mars, the planet of action and energy, you're filled with drive and determination.\nThis is a time to set clear intentions, take decisive action, and confidently pursue your aspirations. The bow and arrow represent your ability to direct your energy with purpose, hitting the mark with skill and accuracy. The current lunar cycle highlights your fifth house of creativity, self-expression, and romance. This could manifest as a surge of inspiration, a desire to showcase your talents, or opportunities for passionate encounters. It's a time to embrace your inner artist and express yourself authentically.",
  },
  {
    pathID: 112122,
    horoscope:
      "Your journey along the sunlit path has brought you to an artisan's workshop, where you've been drawn to a vibrant set of paints and brushes. This choice reflects your readiness to express your unique vision and share your colorful perspective with the world. With Jupiter, your ruling planet, forming a creative trine to Neptune, the planet of inspiration, you're being called to embrace your artistic side and let your imagination soar.\nThe artistic tools you've chosen suggest that you're ready to translate your adventures and insights into tangible forms of expression. This is a time when your natural enthusiasm can be channeled into creative projects that inspire others. The current lunar cycle highlights your fifth house of creativity and self-expression, making this an ideal time to start new artistic ventures.",
  },
  {
    pathID: 112123,
    horoscope:
      "Your journey along the sunlit path has brought you to an artisan's workshop, where you've been drawn to a musical instrument. This choice reflects your desire to find harmony in your life's journey and communicate through universal languages. With Jupiter, your ruling planet, forming a melodious sextile to Mercury, the planet of communication, you're being called to express yourself through new and creative channels.\nThe musical instrument you've chosen suggests that you're ready to tune into life's natural rhythms and find innovative ways to share your message. This is a time when your natural enthusiasm can be transformed into harmonious expression that resonates with others. The current lunar cycle highlights your third house of communication, amplifying your ability to connect with others through creative expression.",
  },
  {
    pathID: 113131,
    horoscope:
      "Your journey along the sunlit path has led you to a scholar's caravan, where an ancient map with unmarked territories has caught your eye. This choice perfectly aligns with your adventurous spirit and your eternal quest for knowledge. With Jupiter, your ruling planet, forming an exciting square to Uranus, the planet of discovery, you're being called to explore uncharted territories of both mind and spirit.\nThe ancient map you've chosen symbolizes your readiness to venture beyond known boundaries and create your own path of discovery. This is a time when your natural love of learning combines with a pioneering spirit, opening doors to unprecedented adventures. The current lunar cycle highlights your ninth house of exploration and higher learning, making this an ideal time for educational pursuits and philosophical discoveries.",
  },
  {
    pathID: 113132,
    horoscope:
      "Your journey along the sunlit path has brought you to a scholar's caravan, where you've been drawn to a magnifying glass. This choice reflects your desire to look beneath the surface and understand the deeper truths of life. With Jupiter, your ruling planet, forming an illuminating trine to Mercury, the planet of analysis, you're being called to examine the details that make up the bigger picture.\nThe magnifying glass you've chosen suggests that you're ready to focus your naturally broad vision on specific areas that require closer attention. This is a time when your enthusiasm for learning can be directed toward mastering particular subjects or skills. The current lunar cycle highlights your sixth house of skill-development and practical wisdom, making this an ideal time for detailed study and careful analysis.",
  },
  {
    pathID: 113133,
    horoscope:
      "Your journey along the sunlit path has led you to a scholar's caravan, where you've been drawn to a quill and ink. This choice reflects your desire to record and share your discoveries with the world. With Jupiter, your ruling planet, forming a harmonious aspect to Venus, the planet of creativity and self-expression, you're being called to document your own philosophical insights and discoveries.\nThe quill and ink you've chosen symbolizes the importance of transforming your experiences into written wisdom that can benefit others. This is a time when your natural philosophical bent can be channeled into creative writing and personal reflection. The current lunar cycle highlights your third house of communication and self-expression, making this an ideal time to begin documenting your thoughts and insights.",
  },
  {
    pathID: 211111,
    horoscope:
      "Your journey through the moonlit grove and your attraction to the crystal pool suggest a deep dive into your inner world. The smooth stone you chose symbolizes the importance of grounding yourself and finding inner peace as you navigate your emotions and intuition. With Neptune, the planet of dreams and spirituality, forming a supportive sextile to your ruling planet Jupiter, you're being called to connect with your subconscious and explore the depths of your imagination.\nThis is a time for heightened intuition, spiritual exploration, and dreamwork. Pay attention to your dreams, meditate, and engage in creative practices that allow you to access your inner wisdom. The current lunar cycle highlights your twelfth house of spirituality and solitude. This could manifest as a need for introspection, retreat, or engaging in practices that nourish your soul.",
  },
  {
    pathID: 211112,
    horoscope:
      "Your journey through the moonlit grove has led you to a crystal pool, where you've been drawn to a mystical dreamcatcher. This choice reflects a deep desire to understand the messages from your subconscious and harness the wisdom of your dreams. With Jupiter, your ruling planet, forming an enlightening trine to Neptune, the planet of dreams and intuition, you're being called to pay special attention to your nighttime visions and symbolic insights.\nThe dreamcatcher you've chosen suggests that you're ready to filter through the various messages your intuition is sending, catching the truly meaningful insights while letting go of unnecessary fears. This is a time when your natural optimism can help you transform dream messages into practical guidance. The current lunar cycle highlights your twelfth house of the subconscious, making this an ideal time for dreamwork and spiritual exploration.",
  },
  {
    pathID: 211113,
    horoscope:
      "Your journey through the moonlit grove has brought you to a crystal pool, where you've been drawn to a vial of fragrant oil. This choice reflects your readiness to engage all your senses in your spiritual practice and enhance your intuitive abilities through aromatherapy. With Jupiter, your ruling planet, forming a harmonious aspect to Venus, the planet of sensory pleasure, you're being called to create sacred experiences that engage both body and spirit.\nThe fragrant oil you've chosen suggests that you're ready to incorporate more sensory awareness into your spiritual practice. This is a time when your natural enthusiasm for exploration can be channeled into discovering how different scents affect your mood, intuition, and energy levels. The current lunar cycle highlights your sixth house of self-care and daily rituals, making this an ideal time to establish new wellness practices.",
  },
  {
    pathID: 212121,
    horoscope:
      "Your journey through the moonlit grove has led you to the Whispering Falls, where you've been drawn to a delicate feather. This choice reflects your growing connection to your inner voice and your readiness to trust your instincts. With Jupiter, your ruling planet, forming an intuitive sextile to the Moon, you're being called to listen more closely to the whispers of your soul.\nThe feather you've chosen symbolizes lightness, grace, and the ability to navigate life's currents with flexibility. This is a time when your natural philosophical nature can be balanced with gentle intuitive guidance. The current lunar cycle highlights your second house of values and inner resources, suggesting a period of discovering what truly matters to you on a soul level.",
  },
  {
    pathID: 212122,
    horoscope:
      "Your journey through the moonlit grove has brought you to the Whispering Falls, where you've been drawn to a luminescent seashell. This choice reflects your readiness to connect with the ebb and flow of your emotional wisdom. With Jupiter, your ruling planet, forming a flowing trine to Neptune, the planet of intuition and spiritual connection, you're being called to dive deeper into your emotional depths while maintaining your natural optimism.\nThe seashell you've chosen suggests that you're ready to listen to the rhythms of your inner tides. This is a time when your characteristic fire can be beautifully balanced with water energy, allowing you to flow more easily with life's currents. The current lunar cycle highlights your fourth house of emotional foundations, making this an ideal time to explore your feelings and find emotional harmony.",
  },
  {
    pathID: 212123,
    horoscope:
      "Your journey through the moonlit grove has led you to the Whispering Falls, where you've been drawn to a delicate wildflower blooming in the moonlight. This choice reflects your readiness to embrace your natural beauty and authentic self-expression. With Jupiter, your ruling planet, forming an inspiring conjunction with Venus, the planet of beauty and self-worth, you're being called to bloom fully into your unique potential.\nThe wildflower you've chosen symbolizes the beauty of growing freely and naturally, without constraint or pretense. This is a time when your natural enthusiasm can be channeled into authentic self-expression and personal growth. The current lunar cycle highlights your first house of self and identity, making this an ideal time to embrace your true nature and let your unique qualities shine.",
  },
  {
    pathID: 213131,
    horoscope:
      "Your journey through the moonlit grove has led you to an ancient tree, where you've been drawn to gather a handful of fertile soil. This choice reflects your readiness to ground your adventurous spirit and nurture new growth in your life. With Jupiter, your ruling planet, forming a harmonious trine to Pluto, the planet of transformation and regeneration, you're being called to plant the seeds of your future while staying connected to your roots.\nThe fertile soil you've chosen symbolizes the rich foundation necessary for growth and the importance of staying grounded as you reach for your dreams. This is a time when your natural enthusiasm for expansion can be balanced with patience and careful nurturing. The current lunar cycle highlights your second house of resources and values, making this an ideal time to cultivate your inner garden and establish strong foundations.",
  },
  {
    pathID: 213132,
    horoscope:
      "Your journey through the moonlit grove has brought you to an ancient tree, where you've been drawn to a piece of bark bearing mysterious symbolic carvings. This choice reflects your natural affinity for ancient wisdom and your desire to understand the deeper meanings of life. With Jupiter, your ruling planet, forming an enlightening aspect to Saturn, the planet of tradition and wisdom, you're being called to study the messages left by those who came before you.\nThe carved bark you've chosen suggests that you're ready to decode the ancient wisdom that surrounds you and apply it to your modern journey. This is a time when your love of learning can be enriched by studying traditional knowledge systems and time-tested truths. The current lunar cycle highlights your ninth house of wisdom and higher learning, making this an ideal time to explore ancient teachings and spiritual traditions.",
  },
  {
    pathID: 213133,
    horoscope:
      "Your journey through the moonlit grove has led you to an ancient tree, where you've been drawn to a carefully crafted bird's nest. This choice reflects your need to create a secure base while maintaining your freedom to soar. With Jupiter, your ruling planet, forming a nurturing sextile to the Moon, you're being called to balance your adventurous spirit with the need for a comfortable home base.\nThe bird's nest you've chosen symbolizes the art of creating security without sacrificing freedom, and the importance of having a safe place to return to after your adventures. This is a time when your natural wanderlust can be enriched by developing stronger roots and deeper connections. The current lunar cycle highlights your fourth house of home and emotional security, making this an ideal time to create your own sanctuary while maintaining your independence.",
  },
  {
    pathID: 311111,
    horoscope:
      "Your journey along the starry ascent has led you to an observatory, where you've been drawn to a powerful telescope. This choice perfectly aligns with your natural desire to see the bigger picture and explore vast horizons. With Jupiter, your ruling planet, forming an expansive trine to Uranus, the planet of discovery and innovation, you're being called to expand your vision beyond ordinary limitations.\nThe telescope you've chosen symbolizes your readiness to look deeper into life's mysteries and gain new perspectives on your journey. This is a time when your natural philosophical nature can be enhanced by scientific curiosity and cosmic wonder. The current lunar cycle highlights your ninth house of exploration and higher understanding, making this an ideal time to broaden your horizons and seek higher truths.",
  },
  {
    pathID: 311112,
    horoscope:
      "Your journey along the starry ascent has brought you to an observatory, where you've been drawn to an intricate star chart. This choice reflects your desire to understand the patterns and cycles that govern both the cosmos and your personal journey. With Jupiter, your ruling planet, forming an enlightening conjunction with Mercury, the planet of knowledge and understanding, you're being called to map out your path with cosmic wisdom.\nThe star chart you've chosen suggests that you're ready to understand the greater patterns at play in your life and align yourself with cosmic rhythms. This is a time when your natural optimism can be enhanced by strategic planning and systematic understanding. The current lunar cycle highlights your eighth house of deep wisdom and transformation, making this an ideal time to decode life's mysteries and plan your journey accordingly.",
  },
  {
    pathID: 311113,
    horoscope:
      "Your journey along the starry ascent has led you to an observatory, where you've been drawn to a mysterious meteorite. This choice reflects your attraction to the extraordinary and your desire to connect with cosmic forces. With Jupiter, your ruling planet, forming a powerful square to Pluto, the planet of transformation and hidden knowledge, you're being called to embrace the revolutionary changes that come from cosmic inspiration.\nThe meteorite you've chosen symbolizes the arrival of unexpected wisdom and the impact of celestial forces in your life. This is a time when your natural adventurous spirit can be catalyzed by profound insights and transformative experiences. The current lunar cycle highlights your fifth house of creativity and self-expression, suggesting that these cosmic influences will spark new forms of creative inspiration.",
  },
  {
    pathID: 312121,
    horoscope:
      "Your journey along the starry ascent has led you to a mystical library, where you've been drawn to a worn, leather-bound book of philosophy. This choice perfectly aligns with your natural love of wisdom and your quest for deeper understanding. With Jupiter, your ruling planet, forming an enlightening trine to Mercury, the planet of knowledge and communication, you're being called to delve into life's profound questions.\nThe philosophical tome you've chosen symbolizes your readiness to engage with complex ideas and expand your intellectual horizons. This is a time when your natural enthusiasm for learning can be channeled into deep philosophical exploration and meaningful discussions. The current lunar cycle highlights your ninth house of higher wisdom and understanding, making this an ideal time to pursue advanced studies and contemplate life's greatest mysteries.",
  },
  {
    pathID: 312122,
    horoscope:
      "Your journey along the starry ascent has brought you to a mystical library, where you've been drawn to a scroll bearing ancient script. This choice reflects your deep connection to timeless wisdom and your desire to understand the teachings of the past. With Jupiter, your ruling planet, forming a powerful aspect to Saturn, the planet of tradition and ancient knowledge, you're being called to bridge ancient wisdom with modern understanding.\nThe ancient scroll you've chosen suggests that you're ready to decode traditional teachings and apply their timeless truths to contemporary life. This is a time when your natural optimism can be enriched by the depth of ancient wisdom traditions. The current lunar cycle highlights your twelfth house of spiritual insight and hidden knowledge, making this an ideal time to uncover secret teachings and forgotten wisdom.",
  },
  {
    pathID: 312123,
    horoscope:
      "Your journey along the starry ascent has led you to a mystical library, where you've been drawn to a pristine blank journal. This choice reflects your readiness to not just consume knowledge, but to become an active creator of wisdom. With Jupiter, your ruling planet, forming an inspiring conjunction with Venus, the planet of creativity and self-expression, you're being called to document your own philosophical insights and discoveries.\nThe blank journal you've chosen symbolizes the potential for you to contribute your unique perspective to the world's repository of wisdom. This is a time when your natural philosophical bent can be channeled into creative writing and personal reflection. The current lunar cycle highlights your third house of communication and self-expression, making this an ideal time to begin documenting your thoughts and insights.",
  },
  {
    pathID: 313131,
    horoscope:
      "Your journey along the starry ascent has brought you to a sage's hermitage, where you've been drawn to a steaming cup of herbal tea. This choice reflects your readiness to slow down and cultivate inner wisdom through mindful contemplation. With Jupiter, your ruling planet, forming a harmonious trine to the Moon, the planet of intuition and emotional wisdom, you're being called to find clarity through peaceful reflection.\nThe herbal tea you've chosen symbolizes the importance of taking time for quiet contemplation and allowing insights to naturally arise. This is a time when your typical adventurous energy can be balanced with moments of stillness and inner exploration. The current lunar cycle highlights your fourth house of inner foundations, making this an ideal time for spiritual practices and self-discovery.",
  },
  {
    pathID: 313132,
    horoscope:
      "Your journey along the starry ascent has led you to a sage's hermitage, where you've been drawn to a well-worn meditation cushion. This choice reflects your readiness to develop a deeper spiritual practice and find wisdom through inner stillness. With Jupiter, your ruling planet, forming a mystical aspect to Neptune, the planet of spiritual awareness, you're being called to explore the vast universe within yourself.\nThe meditation cushion you've chosen symbolizes your commitment to developing a consistent spiritual practice and finding clarity through regular meditation. This is a time when your natural philosophical nature can be enriched by direct spiritual experience and inner exploration. The current lunar cycle highlights your twelfth house of spirituality and transcendence, making this an ideal time to deepen your meditation practice and spiritual understanding.",
  },
  {
    pathID: 313133,
    horoscope:
      "Your journey along the starry ascent has brought you to a sage's hermitage, where you've been drawn to a simple wooden comb. This choice reflects your desire to clear away mental clutter and focus your spiritual energy with precision and care. With Jupiter, your ruling planet, forming a grounding trine to Saturn, the planet of discipline and structure, you're being called to bring order to your spiritual practice and thoughts.\nThe wooden comb you've chosen symbolizes the importance of mental clarity and the patient work of untangling complex spiritual concepts. This is a time when your natural enthusiasm for spiritual exploration can be enhanced by systematic practice and careful attention to detail. The current lunar cycle highlights your sixth house of daily practice and routine, making this an ideal time to establish new spiritual habits and organize your thoughts.",
  },
];

export { narratives, results };
