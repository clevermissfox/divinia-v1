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
            pathID: 113132,
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

const results = [
  {
    pathID: 111111,
    horoscope:
      "Sagittarius: The cosmos is calling you to embark on a journey of self-discovery and exploration. Your choices reflect a thirst for knowledge and a desire to connect with diverse cultures and perspectives. The worn journal you selected symbolizes the importance of documenting your experiences and reflecting on your journey. With Jupiter, your ruling planet, forming a harmonious trine with Uranus, the planet of innovation, you're being encouraged to step outside your comfort zone and embrace new experiences. This is a time for broadening your horizons, both physically and intellectually. Travel, education, and cultural exchange are highly favored at this time.The current lunar cycle highlights your third house of communication and short-distance travel. This could manifest as opportunities to connect with people from different backgrounds, learn new languages, or explore your local community with fresh eyes.",
    keyDates:
      "December 29th: A day for setting intentions and planning your next adventure.January 6th:  A chance encounter could lead to a valuable connection or opportunity.January 13th: A favorable time for short trips, workshops, or online courses.",
    actionSteps:
      "1. Document your experiences: Keep a journal, take photos, and record your reflections. 2. Connect with people from different cultures: Attend cultural events, travel, or engage in online communities.3.Embrace new perspectives: Be open to learning from others and challenging your own beliefs.",
  },
  {
    pathID: 111112,
    horoscope:
      "Sagittarius: Your journey along the sunlit path has led you to a traveler's tent, where you've been drawn to a beautifully hand-woven tapestry. This choice reflects your ability to see the bigger picture of your life's journey and appreciate how each experience weaves into a greater whole. With Jupiter, your ruling planet, forming a harmonious aspect to Venus, the planet of art and beauty, you're being called to recognize the artistry in your life's journey. The tapestry you've chosen symbolizes the intricate way your various experiences and adventures are interconnecting. This is a time to step back and appreciate the pattern that's emerging from your choices and experiences. The current lunar cycle highlights your seventh house of relationships and partnerships, suggesting that collaborative efforts will be particularly rewarding.",
    keyDates:
      "January 3rd: An opportunity to share your story with others; January 10th: A chance to weave new connections into your life's tapestry; January 17th: A moment of clarity about your life's direction.",
    actionSteps:
      "1. Visualize your life's pattern: Create a vision board or timeline of your journey 2. Celebrate your achievements: Take time to appreciate how far you've come 3. Share your story: Let others be inspired by your unique path.",
  },
  {
    pathID: 111113,
    horoscope:
      "Sagittarius: Your journey along the sunlit path has brought you to a traveler's tent, where you've been drawn to a set of mysterious divination tools. This choice reflects your natural affinity for exploring the unknown and seeking deeper wisdom. With Jupiter, your ruling planet, in a powerful alignment with Pluto, the planet of transformation, you're being called to tap into your intuitive abilities and trust your inner guidance. The divination tools you've chosen suggest that you're ready to access higher wisdom and explore the hidden potential in your future. This is a time when your natural optimism combines with deep insight, allowing you to make decisions that align with your highest path. The current lunar cycle highlights your ninth house of wisdom and expansion, amplifying your ability to see beyond the obvious and trust your intuitive hunches.",
    keyDates:
      "January 4th: A powerful day for receiving intuitive insights; January 11th: An opportunity to make a decision guided by your inner wisdom; January 18th: A moment of clarity about your spiritual path.",
    actionSteps:
      "1. Develop your intuition: Practice meditation or other spiritual practices. 2. Trust your inner guidance: Pay attention to your gut feelings. 3. Explore divination practices: Learn about different ways to access wisdom.",
  },
  {
    pathID: 112121,
    horoscope:
      "Sagittarius: Your journey along the sunlit path has led you to a brightly lit artisan's workshop, where you've chosen a finely crafted bow and arrow. This symbolizes your focused pursuit of goals and the precision with which you aim for your ambitions. With Jupiter, your ruling planet, in a dynamic aspect to Mars, the planet of action and energy, you're filled with drive and determination. This is a time to set clear intentions, take decisive action, and confidently pursue your aspirations. The bow and arrow represent your ability to direct your energy with purpose, hitting the mark with skill and accuracy. The current lunar cycle highlights your fifth house of creativity, self-expression, and romance. This could manifest as a surge of inspiration, a desire to showcase your talents, or opportunities for passionate encounters.",
    keyDates:
      "January 2nd: A surge of inspiration and motivation to pursue your goals; January 9th: A favorable time for taking decisive action and making significant progress; January 16th: A moment to celebrate your achievements and acknowledge your progress.",
    actionSteps:
      "1. Define your target: Clearly outline your goals and break them down into smaller, manageable steps. 2. Focus your energy: Channel your drive and determination towards your objectives with unwavering focus. 3. Take aim and release: Take calculated risks and confidently pursue your ambitions, trusting in your abilities.",
  },
  {
    pathID: 112122,
    horoscope: "create",
    keyDates: "create",
    actionSteps: "create",
  },
  {
    pathID: 112123,
    horoscope:
      "Sagittarius: Your journey along the sunlit path has brought you to an artisan's workshop, where you've been drawn to a musical instrument. This choice reflects your desire to find harmony in your life's journey and communicate through universal languages. With Jupiter, your ruling planet, forming a melodious sextile to Mercury, the planet of communication, you're being called to express yourself through new and creative channels. The musical instrument you've chosen suggests that you're ready to tune into life's natural rhythms and find innovative ways to share your message. This is a time when your natural enthusiasm can be transformed into harmonious expression that resonates with others. The current lunar cycle highlights your third house of communication, amplifying your ability to connect with others through creative expression.",
    keyDates:
      "January 6th: A moment of musical inspiration; January 13th: An opportunity to perform or share your talents; January 20th: A chance to collaborate with like-minded souls.",
    actionSteps:
      "1. Learn new rhythms: Explore different musical styles and traditions. 2. Share your voice: Don't be afraid to express yourself through sound. 3. Find your rhythm: Create daily practices that bring harmony to your life.",
  },
  {
    pathID: 113131,
    horoscope: "create",
    keyDates: "create",
    actionSteps: "create",
  },
  {
    pathID: 113132,
    horoscope: "create",
    keyDates: "create",
    actionSteps: "create",
  },
  {
    pathID: 113133,
    horoscope: "create",
    keyDates: "create",
    actionSteps: "create",
  },
  {
    pathID: 211111,
    horoscope:
      "Sagittarius: Your journey through the moonlit grove and your attraction to the crystal pool suggest a deep dive into your inner world. The smooth stone you chose symbolizes the importance of grounding yourself and finding inner peace as you navigate your emotions and intuition. With Neptune, the planet of dreams and spirituality, forming a supportive sextile to your ruling planet Jupiter, you're being called to connect with your subconscious and explore the depths of your imagination. This is a time for heightened intuition, spiritual exploration, and dreamwork. Pay attention to your dreams, meditate, and engage in creative practices that allow you to access your inner wisdom. The current lunar cycle highlights your twelfth house of spirituality and solitude. This could manifest as a need for introspection, retreat, or engaging in practices that nourish your soul.",
    keyDates:
      "December 30th: A powerful day for meditation, dreamwork, and connecting with your intuition. January 7th: An opportunity for emotional healing and release may arise. January 14th: A favorable time for spiritual practices, retreats, or spending time in nature.",
    actionSteps:
      "1. Create a sacred space for yourself: Find a quiet place where you can relax and connect with your inner self. 2. Engage in practices that nourish your soul: Meditate, practice yoga, spend time in nature, or pursue creative endeavors. 3. Listen to your intuition: Pay attention to your gut feelings and trust your inner guidance.",
  },
  {
    pathID: 211112,
    horoscope:
      "Sagittarius: Your journey through the moonlit grove has led you to a crystal pool, where you've been drawn to a mystical dreamcatcher. This choice reflects a deep desire to understand the messages from your subconscious and harness the wisdom of your dreams. With Jupiter, your ruling planet, forming an enlightening trine to Neptune, the planet of dreams and intuition, you're being called to pay special attention to your nighttime visions and symbolic insights. The dreamcatcher you've chosen suggests that you're ready to filter through the various messages your intuition is sending, catching the truly meaningful insights while letting go of unnecessary fears. This is a time when your natural optimism can help you transform dream messages into practical guidance. The current lunar cycle highlights your twelfth house of the subconscious, making this an ideal time for dreamwork and spiritual exploration.",
    keyDates:
      "January 8th: A particularly significant dream may offer important guidance; January 15th: An opportunity to act on intuitive insights; January 22nd: A moment of clarity about a recurring dream pattern.",
    actionSteps:
      "1. Keep a dream journal: Record and reflect on your nighttime messages. 2. Create a bedtime ritual: Set intentions for receiving guidance through dreams. 3. Trust your inner wisdom: Act on the insights your dreams provide.",
  },
  {
    pathID: 211113,
    horoscope:
      "Sagittarius: Your journey through the moonlit grove has brought you to a crystal pool, where you've been drawn to a vial of fragrant oil. This choice reflects your readiness to engage all your senses in your spiritual practice and enhance your intuitive abilities through aromatherapy. With Jupiter, your ruling planet, forming a harmonious aspect to Venus, the planet of sensory pleasure, you're being called to create sacred experiences that engage both body and spirit. The fragrant oil you've chosen suggests that you're ready to incorporate more sensory awareness into your spiritual practice. This is a time when your natural enthusiasm for exploration can be channeled into discovering how different scents affect your mood, intuition, and energy levels. The current lunar cycle highlights your sixth house of self-care and daily rituals, making this an ideal time to establish new wellness practices.",
    keyDates:
      "January 9th: A perfect day to begin a new self-care ritual; January 16th: An opportunity to deepen your spiritual practice; January 23rd: A moment of profound sensory awareness.",
    actionSteps:
      "1. Create a sacred space: Use aromatherapy to enhance your meditation area. 2. Explore essential oils: Learn about different scents and their properties. 3. Develop mindful practices: Incorporate sensory awareness into daily life.",
  },
  {
    pathID: 212121,
    horoscope:
      "Sagittarius: Your journey through the moonlit grove has led you to the Whispering Falls, where you've been drawn to a delicate feather. This choice reflects your growing connection to your inner voice and your readiness to trust your instincts. With Jupiter, your ruling planet, forming an intuitive sextile to the Moon, you're being called to listen more closely to the whispers of your soul. The feather you've chosen symbolizes lightness, grace, and the ability to navigate life's currents with flexibility. This is a time when your natural philosophical nature can be balanced with gentle intuitive guidance. The current lunar cycle highlights your second house of values and inner resources, suggesting a period of discovering what truly matters to you on a soul level.",
    keyDates:
      "January 10th: A powerful moment for receiving intuitive messages; January 17th: An opportunity to make an important decision guided by intuition; January 24th: A chance to share your inner wisdom with others.",
    actionSteps:
      "1. Practice listening: Set aside quiet time to hear your inner voice. 2. Follow your instincts: Trust your first impressions and gut feelings. 3. Stay flexible: Allow your path to unfold naturally, like a feather in the wind.",
  },
  {
    pathID: 212122,
    horoscope:
      "Sagittarius: Your journey through the moonlit grove has brought you to the Whispering Falls, where you've been drawn to a luminescent seashell. This choice reflects your readiness to connect with the ebb and flow of your emotional wisdom. With Jupiter, your ruling planet, forming a flowing trine to Neptune, the planet of intuition and spiritual connection, you're being called to dive deeper into your emotional depths while maintaining your natural optimism. The seashell you've chosen suggests that you're ready to listen to the rhythms of your inner tides. This is a time when your characteristic fire can be beautifully balanced with water energy, allowing you to flow more easily with life's currents. The current lunar cycle highlights your fourth house of emotional foundations, making this an ideal time to explore your feelings and find emotional harmony.",
    keyDates:
      "January 11th: A powerful day for emotional breakthroughs; January 18th: An opportunity to share your feelings with others; January 25th: A moment of deep emotional clarity and peace.",
    actionSteps:
      "1. Listen to your emotions: Let them guide you like the tides. 2. Find your flow: Create rituals that help you move smoothly through your day. 3. Share your heart: Express your feelings with trusted companions.",
  },
  {
    pathID: 212123,
    horoscope:
      "Sagittarius: Your journey through the moonlit grove has led you to the Whispering Falls, where you've been drawn to a delicate wildflower blooming in the moonlight. This choice reflects your readiness to embrace your natural beauty and authentic self-expression. With Jupiter, your ruling planet, forming an inspiring conjunction with Venus, the planet of beauty and self-worth, you're being called to bloom fully into your unique potential. The wildflower you've chosen symbolizes the beauty of growing freely and naturally without constraint or pretense. This is a time when your natural enthusiasm can be channeled into authentic self-expression and personal growth.",
    keyDates:
      "January 12th: A day of personal breakthrough and self-discovery; January 19th: An opportunity to showcase your authentic self; January 26th: A moment to celebrate your personal growth.",
    actionSteps:
      "1. Embrace your uniqueness: Celebrate what makes you different. 2. Grow naturally: Don't force development - trust in timing. 3. Share beauty: Let authentic self inspire others.",
  },
  {
    pathID: 213131,
    horoscope:
      "Sagittarius: Your journey through the moonlit grove has led you to an ancient tree where you've been drawn to gather a handful of fertile soil. This choice reflects your readiness to ground your adventurous spirit and nurture new growth in your life. With Jupiter, your ruling planet, forming a harmonious trine to Pluto, the planet of transformation and regeneration, you’re being called to plant the seeds of your future while staying connected to your roots. The fertile soil you've chosen symbolizes the rich foundation necessary for growth and the importance of staying grounded as you reach for your dreams. This is a time when your natural enthusiasm for expansion can be balanced with patience and careful nurturing. The current lunar cycle highlights your second house of resources and values, making this an ideal time to cultivate your inner garden and establish strong foundations.",
    keyDates:
      "January 13th: A perfect day for planting new intentions; January 20th: An opportunity to nurture important relationships or projects; January 27th: A moment to appreciate your personal growth.",
    actionSteps:
      "1. Ground yourself: Create daily rituals that connect you to the earth. 2. Nurture growth: Tend to the seeds of your dreams with patience. 3. Honor your roots: Acknowledge the foundation that supports your expansion.",
  },
  {
    pathID: 213132,
    horoscope:
      "Sagittarius: Your journey through the moonlit grove has brought you to an ancient tree, where you've been drawn to a piece of bark bearing mysterious symbolic carvings. This choice reflects your natural affinity for ancient wisdom and your desire to understand the deeper meanings of life. With Jupiter, your ruling planet, forming an enlightening aspect to Saturn, the planet of tradition and wisdom, you're being called to study the messages left by those who came before you. The carved bark you've chosen suggests that you're ready to decode ancient wisdom that surrounds you and apply it to your modern journey. This is a time when your love of learning can be enriched by studying traditional knowledge systems and time-tested truths. The current lunar cycle highlights your ninth house of wisdom and higher learning, making this an ideal time to explore ancient teachings and spiritual traditions.",
    keyDates:
      "January 14th: A breakthrough in understanding ancient wisdom; January 21st: An opportunity to share traditional knowledge; January 28th: A moment to integrate old wisdom with new insights.",
    actionSteps:
      "1. Study traditions: Explore ancient wisdom teachings that call to you. 2. Decode symbols: Pay attention to recurring signs and patterns. 3. Bridge times: Connect ancient wisdom with modern understanding.",
  },
  {
    pathID: 213133,
    horoscope:
      "Sagittarius: Your journey through the moonlit grove has led you to an ancient tree, where you've been drawn to a carefully crafted bird's nest. This choice reflects your need to create a secure base while maintaining your freedom to soar. With Jupiter, your ruling planet, forming a nurturing sextile to the Moon, you're being called to balance your adventurous spirit with the need for a comfortable home base. The bird's nest you've chosen symbolizes the art of creating security without sacrificing freedom, and the importance of having a safe place to return to after your adventures. This is a time when your natural wanderlust can be enriched by developing stronger roots and deeper connections. The current lunar cycle highlights your fourth house of home and emotional security, making this an ideal time to create your own sanctuary while maintaining your independence.",
    keyDates:
      "January 15th: A perfect day for home improvements or creating sacred space; January 22nd: An opportunity to strengthen family bonds; January 29th: A moment to balance adventure with security.",
    actionSteps:
      "1. Create your sanctuary: Design a space that feels both grounding and inspiring. 2. Build connections: Nurture relationships that support your growth. 3. Balance freedom and security: Find ways to feel at home wherever you roam.",
  },

  {
    pathID: 311111,
    horoscope:
      "Sagittarius: Your journey along the starry ascent has led you to an observatory, where you've been drawn to a powerful telescope. This choice perfectly aligns with your natural desire to see the bigger picture and explore vast horizons. With Jupiter, your ruling planet, forming an expansive trine to Uranus, the planet of discovery and innovation, you're being called to expand your vision beyond ordinary limitations. The telescope you've chosen symbolizes your readiness to look deeper into life's mysteries and gain new perspectives on your journey. This is a time when your natural philosophical nature can be enhanced by scientific curiosity and cosmic wonder. The current lunar cycle highlights your ninth house of exploration and higher understanding, making this an ideal time to broaden your horizons and seek higher truths.",
    keyDates:
      "January 16th: A breakthrough moment of clarity and vision; January 23rd: An opportunity to share your expanded perspective; January 30th: A perfect time for long-term planning and visioning.",
    actionSteps:
      "1. Expand your vision: Look beyond immediate circumstances to see larger patterns. 2. Study the cosmos: Learn about astronomy or cosmic phenomena that interest you. 3. Share your perspective: Help others see the bigger picture.",
  },
  {
    pathID: 311112,
    horoscope:
      "Sagittarius: Your journey along the starry ascent has brought you to an observatory, where you've been drawn to an intricate star chart. This choice reflects your desire to understand the patterns and cycles that govern both the cosmos and your personal journey. With Jupiter, your ruling planet, forming an enlightening conjunction with Mercury, the planet of knowledge and understanding, you're being called to map out your path with cosmic wisdom. The star chart you've chosen suggests that you're ready to understand the greater patterns at play in your life and align yourself with cosmic rhythms. This is a time when your natural optimism can be enhanced by strategic planning and systematic understanding. The current lunar cycle highlights your eighth house of deep wisdom and transformation, making this an ideal time to decode life's mysteries and plan your journey accordingly.",
    keyDates:
      "January 17th: A day of significant insight into life patterns; January 24th: An opportunity to create a long-term vision; January 31st: A moment to align your plans with cosmic timing.",
    actionSteps:
      "1. Study patterns: Look for recurring cycles in your life. 2. Create your map: Chart out your goals and aspirations. 3. Align with timing: Work with natural rhythms and cycles.",
  },
  {
    pathID: 311113,
    horoscope:
      "Sagittarius: Your journey along the starry ascent has led you to an observatory, where you've been drawn to a mysterious meteorite. This choice reflects your attraction to the extraordinary and your desire to connect with cosmic forces. With Jupiter, your ruling planet, forming a powerful square to Pluto, the planet of transformation and hidden knowledge, you're being called to embrace the revolutionary changes that come from cosmic inspiration. The meteorite you've chosen symbolizes the arrival of unexpected wisdom and the impact of celestial forces in your life. This is a time when your natural adventurous spirit can be catalyzed by profound insights and transformative experiences. The current lunar cycle highlights your fifth house of creativity and self-expression, suggesting that these cosmic influences will spark new forms of creative inspiration.",
    keyDates:
      "January 18th: A day of unexpected revelations; January 25th: An opportunity to harness transformative energy; February 1st: A moment to integrate cosmic wisdom into daily life.",
    actionSteps:
      "1. Embrace the extraordinary: Be open to unusual experiences and insights. 2. Channel cosmic energy: Use your inspiration to create positive change. 3. Share your discoveries: Let your unique perspective inspire others.",
  },
  {
    pathID: 312121,
    horoscope:
      "Sagittarius: Your journey along the starry ascent has led you to a mystical library, where you've been drawn to a worn, leather-bound book of philosophy. This choice perfectly aligns with your natural love of wisdom and your quest for deeper understanding. With Jupiter, your ruling planet, forming an enlightening trine to Mercury, the planet of knowledge and communication, you're being called to delve into life's profound questions. The philosophical tome you've chosen symbolizes your readiness to engage with complex ideas and expand your intellectual horizons. This is a time when your natural enthusiasm for learning can be channeled into deep philosophical exploration and meaningful discussions. The current lunar cycle highlights your ninth house of higher wisdom and understanding, making this an ideal time to pursue advanced studies and contemplate life's greatest mysteries.",
    keyDates:
      "January 19th: A breakthrough in understanding a complex concept; January 26th: An opportunity to engage in meaningful philosophical discussions; February 2nd: A perfect time to share your wisdom with others.",
    actionSteps:
      "1. Study deeply: Immerse yourself in philosophical texts that intrigue you. 2. Engage in dialogue: Seek out meaningful discussions about life's big questions. 3. Apply wisdom: Find practical applications for philosophical insights.",
  },
  {
    pathID: 312122,
    horoscope:
      "Sagittarius: Your journey along the starry ascent has brought you to a mystical library, where you've been drawn to a scroll bearing ancient script. This choice reflects your deep connection to timeless wisdom and your desire to understand the teachings of the past. With Jupiter, your ruling planet, forming a powerful aspect to Saturn, the planet of tradition and ancient knowledge, you're being called to bridge ancient wisdom with modern understanding. The ancient scroll you've chosen suggests that you're ready to decode traditional teachings and apply their timeless truths to contemporary life. This is a time when your natural optimism can be enriched by the depth of ancient wisdom traditions. The current lunar cycle highlights your twelfth house of spiritual insight and hidden knowledge, making this an ideal time to uncover secret teachings and forgotten wisdom.",
    keyDates:
      "January 20th: A day of profound insights from ancient wisdom; January 27th: An opportunity to share traditional knowledge in modern contexts; February 3rd: A moment to integrate ancient and modern understanding.",
    actionSteps:
      "1. Study traditions: Research ancient wisdom traditions that call to you. 2. Bridge times: Find ways to apply ancient wisdom to modern challenges. 3. Preserve knowledge: Help keep traditional wisdom alive and relevant.",
  },
  {
    pathID: 312123,
    horoscope:
      "Sagittarius: Your journey along the starry ascent has led you to a mystical library, where you've been drawn to a pristine blank journal. This choice reflects your readiness not just to consume knowledge but also to become an active creator of wisdom. With Jupiter, your ruling planet, forming an inspiring conjunction with Venus, the planet of creativity and self-expression, you're being called to document your own philosophical insights and discoveries. The blank journal you've chosen symbolizes the potential for you to contribute your unique perspective to the world's repository of wisdom. This is a time when your natural philosophical bent can be channeled into creative writing and personal reflection.",
    keyDates:
      "January 21st: A surge of inspiration for writing and reflection; January 28th: An opportunity to share your written insights; February 4th: A perfect time to start a new writing project.",
    actionSteps:
      "1. Start writing: Begin documenting your thoughts and philosophical insights. 2. Develop your voice: Trust in the value of your unique perspective. 3. Share your wisdom: Consider ways to publish or distribute your writings.",
  },
  {
    pathID: 313131,
    horoscope:
      "Sagittarius: Your journey along the starry ascent has brought you to a sage's hermitage, where you've been drawn to a steaming cup of herbal tea. This choice reflects your readiness to slow down and cultivate inner wisdom through mindful contemplation. With Jupiter, your ruling planet, forming a harmonious trine to the Moon, the planet of intuition and emotional wisdom, you're being called to find clarity through peaceful reflection. The herbal tea you've chosen symbolizes the importance of taking time for quiet contemplation and allowing insights to naturally arise. This is a time when your typical adventurous energy can be balanced with moments of stillness and inner exploration. The current lunar cycle highlights your fourth house of inner foundations, making this an ideal time for spiritual practices and self-discovery.",
    keyDates:
      "January 22nd: A perfect day for quiet reflection and meditation; January 29th: An opportunity for deep spiritual insights; February 5th: A moment to share your inner wisdom with others.",
    actionSteps:
      "1. Create ritual: Develop daily practices that encourage mindfulness. 2. Embrace silence: Make time for quiet contemplation and reflection. 3. Share peace: Help others find their own path to inner calm.",
  },
  {
    pathID: 313132,
    horoscope:
      "Sagittarius: Your journey along the starry ascent has led you to a sage's hermitage, where you've been drawn to a well-worn meditation cushion. This choice reflects your readiness to develop a deeper spiritual practice and find wisdom through inner stillness. With Jupiter, your ruling planet, forming a mystical aspect to Neptune, the planet of spiritual awareness, you're being called to explore the vast universe within yourself. The meditation cushion you've chosen symbolizes your commitment to developing a consistent spiritual practice and finding clarity through regular meditation. This is a time when your natural philosophical nature can be enriched by direct spiritual experience and inner exploration. The current lunar cycle highlights your twelfth house of spirituality and transcendence, making this an ideal time to deepen your meditation practice and spiritual understanding.",
    keyDates:
      "January 23rd: A powerful day for spiritual breakthroughs; January 30th: An opportunity to deepen your meditation practice; February 6th: A moment to share your spiritual insights with others.",
    actionSteps:
      "1. Establish practice: Create a regular meditation routine that works for you. 2. Explore techniques: Try different forms of meditation to find what resonates. 3. Create space: Design a dedicated area for your spiritual practice.",
  },
  {
    pathID: 313133,
    horoscope:
      "Sagittarius: Your journey along the starry ascent has brought you to a sage's hermitage, where you've been drawn to a simple wooden comb. This choice reflects your desire to clear away mental clutter and focus your spiritual energy with precision and care. With Jupiter, your ruling planet, forming a grounding trine to Saturn, the planet of discipline and structure, you're being called to bring order to your spiritual practice and thoughts. The wooden comb you've chosen symbolizes the importance of mental clarity and the patient work of untangling complex spiritual concepts. This is a time when your natural enthusiasm for spiritual exploration can be enhanced by systematic practice and careful attention to detail. The current lunar cycle highlights your sixth house of daily practice and routine, making this an ideal time to establish new spiritual habits and organize your thoughts.",
    keyDates:
      "January 24th: A perfect day for clearing mental barriers; January 31st: An opportunity to establish new spiritual routines; February 7th: A moment to share your organized approach with others.",
    actionSteps:
      "1. Clear your mind: Practice regular mental decluttering exercises. 2. Create structure: Develop a systematic approach to spiritual growth. 3. Share methods: Help others find clarity in their spiritual practice.",
  },
];

export { results };
