// ============================================
// Quiz Questions
// ============================================
const questions = [
  {
    text: "When you walk into a room full of strangers, what's your first instinct?",
    answers: [
      { text: "Scan the room and find the most interesting person to talk to", id: "a" },
      { text: "Find a comfortable spot and wait for someone to approach me", id: "b" },
      { text: "Immediately start introducing myself to everyone", id: "c" },
      { text: "Observe the dynamics: who's leading, who's following", id: "d" }
    ]
  },
  {
    text: "A close friend cancels plans at the last minute. What goes through your mind first?",
    answers: [
      { text: "\"Something must be wrong. I should check on them\"", id: "a" },
      { text: "\"Finally, an evening to myself\"", id: "b" },
      { text: "\"That's frustrating. I rearranged my schedule for this\"", id: "c" },
      { text: "\"I wonder if I did something to upset them\"", id: "d" }
    ]
  },
  {
    text: "You're given a massive, ambiguous project with no clear instructions. How do you start?",
    answers: [
      { text: "Research extensively before making any moves", id: "a" },
      { text: "Jump in and figure it out as I go", id: "b" },
      { text: "Create a detailed plan with milestones and deadlines", id: "c" },
      { text: "Find someone who's done something similar and ask for guidance", id: "d" }
    ]
  },
  {
    text: "What do you value most in your closest relationships?",
    answers: [
      { text: "Intellectual stimulation and deep conversations", id: "a" },
      { text: "Unconditional loyalty and emotional safety", id: "b" },
      { text: "Shared adventures and new experiences", id: "c" },
      { text: "Honesty, even when it's uncomfortable", id: "d" }
    ]
  },
  {
    text: "It's Sunday with nothing planned. Your ideal day looks like:",
    answers: [
      { text: "A passion project I've been meaning to get back to", id: "a" },
      { text: "A long brunch with friends followed by aimless wandering", id: "b" },
      { text: "Reading, journaling, or something quiet and reflective", id: "c" },
      { text: "Organizing, planning, or getting ahead on the week", id: "d" }
    ]
  },
  {
    text: "When you disagree with someone you respect, you typically:",
    answers: [
      { text: "Say it directly. Honest disagreement is healthy", id: "a" },
      { text: "Ask questions to understand their perspective first", id: "b" },
      { text: "Keep it to myself unless it really matters", id: "c" },
      { text: "Find a diplomatic way to present my alternative view", id: "d" }
    ]
  },
  {
    text: "What kind of criticism stings the most?",
    answers: [
      { text: "Being told I'm not competent or knowledgeable enough", id: "a" },
      { text: "Being told I'm too intense or overwhelming for people", id: "b" },
      { text: "Being called selfish or uncaring", id: "c" },
      { text: "Being told I'm not living up to my potential", id: "d" }
    ]
  },
  {
    text: "In a team setting, you naturally gravitate toward:",
    answers: [
      { text: "The visionary role, generating ideas and direction", id: "a" },
      { text: "The executor, getting things done efficiently", id: "b" },
      { text: "The mediator, keeping everyone aligned and heard", id: "c" },
      { text: "The analyst, poking holes and ensuring quality", id: "d" }
    ]
  },
  {
    text: "What's your relationship with rules and structure?",
    answers: [
      { text: "I respect rules that make sense, and question the ones that don't", id: "a" },
      { text: "Structure gives me comfort. I like knowing what's expected", id: "b" },
      { text: "I find most rules are just suggestions", id: "c" },
      { text: "I create my own systems that work better than the official ones", id: "d" }
    ]
  },
  {
    text: "When you're stressed, you tend to:",
    answers: [
      { text: "Withdraw and process things internally", id: "a" },
      { text: "Over-commit and stay busy to avoid feeling it", id: "b" },
      { text: "Talk it out with someone I trust", id: "c" },
      { text: "Get irritable and controlling about small things", id: "d" }
    ]
  },
  {
    text: "Which statement resonates most deeply with you?",
    answers: [
      { text: "\"I need to understand the world before I can act in it\"", id: "a" },
      { text: "\"I need to be needed; that's how I know I matter\"", id: "b" },
      { text: "\"I need freedom to be who I am without constraints\"", id: "c" },
      { text: "\"I need to do things right, or it haunts me\"", id: "d" }
    ]
  },
  {
    text: "When you think about your legacy, what you'll be remembered for, what matters most?",
    answers: [
      { text: "That I was authentic and lived on my own terms", id: "a" },
      { text: "That I made people feel seen, valued, and loved", id: "b" },
      { text: "That I built or created something meaningful", id: "c" },
      { text: "That I stood for something and made a real difference", id: "d" }
    ]
  },
  {
    text: "You notice a coworker is struggling but hasn't asked for help. You:",
    answers: [
      { text: "Offer to help directly. Why wait for them to ask?", id: "a" },
      { text: "Drop a subtle hint that you're available if they need anything", id: "b" },
      { text: "Assume they'll ask if they need help. I respect their autonomy", id: "c" },
      { text: "Quietly handle some of the load without making it a thing", id: "d" }
    ]
  },
  {
    text: "What energizes you most after a long, draining week?",
    answers: [
      { text: "Complete solitude: no people, no obligations, no noise", id: "a" },
      { text: "A deep, meaningful conversation with someone I trust", id: "b" },
      { text: "Something physical: a hike, a workout, cooking a great meal", id: "c" },
      { text: "Diving into a creative project or learning something new", id: "d" }
    ]
  },
  {
    text: "When making a big life decision, you rely most on:",
    answers: [
      { text: "My gut feeling. I usually know before I can explain why", id: "a" },
      { text: "Careful analysis of all the options and their trade-offs", id: "b" },
      { text: "Advice from people who've been in similar situations", id: "c" },
      { text: "My core values. Does this align with who I want to be?", id: "d" }
    ]
  }
];

// ============================================
// 15 Personality Archetypes
// ============================================
const personalities = [
  {
    name: "The Luminary",
    badge: "Archetype I: Visionary Leader",
    summary: "You are a rare blend of deep intuition and bold action. Luminaries possess an almost magnetic quality. People are drawn to your clarity of vision and your ability to articulate futures that others can't yet see. You don't just dream; you architect. Your mind operates several steps ahead, weaving together patterns and possibilities into coherent narratives that inspire others to follow. At your best, you transform chaos into direction. At your most challenged, you can become impatient with those who don't share your pace or vision.",
    traits: ["Visionary", "Charismatic", "Strategic", "Intense", "Future-oriented"],
    strengths: ["Natural ability to inspire and mobilize others", "Can synthesize complex information into clear direction", "Thrives in ambiguity where others freeze", "Builds movements, not just projects"],
    blindspots: ["Can dismiss practical concerns as 'small thinking'", "May unconsciously steamroll quieter voices", "Tendency to overcommit to the 'next big thing'", "Can confuse confidence with correctness"],
    compatibility: "You connect most deeply with The Sage and The Alchemist, who match your depth without competing for the spotlight. Be mindful in relationships with The Sentinel. Your pace can overwhelm their need for stability, but their grounding influence is exactly what you need.",
    growth: "Your growth edge is patience. Not everything needs to be a revolution. Practice sitting with 'good enough' and letting ideas mature before launching them. The world needs your vision, but it needs your presence even more."
  },
  {
    name: "The Sentinel",
    badge: "Archetype II: Devoted Guardian",
    summary: "You are the person everyone secretly relies on but rarely thanks enough. Sentinels carry an extraordinary capacity for loyalty and consistency that forms the backbone of every community they're part of. Your strength isn't flashy; it's foundational. You notice the cracks before they become chasms, and you show up reliably in a world that often doesn't. You carry a deep sense of duty, not because someone imposed it on you, but because you genuinely believe that showing up matters.",
    traits: ["Loyal", "Observant", "Steady", "Protective", "Principled"],
    strengths: ["Unshakeable reliability that others depend on", "Keen eye for risks and vulnerabilities others miss", "Deep capacity for long-term commitment", "Creates safety and stability in chaotic environments"],
    blindspots: ["Can become rigid when routines are disrupted", "May sacrifice personal needs for duty", "Tendency toward worst-case-scenario thinking", "Can struggle to delegate or trust others to follow through"],
    compatibility: "Your steadiness pairs beautifully with The Wanderer's spontaneity; you ground each other. Deep friendships with The Healer feel natural, as you both value emotional safety. Watch for tension with The Maverick, whose rule-breaking can feel threatening to your sense of order.",
    growth: "Your growth edge is trust. Specifically, trusting that things won't fall apart if you step back. You don't have to hold everything together alone. Practice letting small things go wrong without intervening. You'll discover the world is more resilient than your anxiety suggests."
  },
  {
    name: "The Sage",
    badge: "Archetype III: Contemplative Thinker",
    summary: "Your mind is your most powerful instrument, and you've spent a lifetime sharpening it. Sages are driven by an insatiable need to understand, not just surface-level knowledge, but the deep structures that govern how things work. You collect insights the way others collect experiences, building intricate internal models of the world. Conversations with you feel like stepping into a library where every book is open to the most interesting page. Your gift is making the complex comprehensible.",
    traits: ["Analytical", "Curious", "Independent", "Perceptive", "Reserved"],
    strengths: ["Extraordinary depth of understanding in chosen domains", "Ability to see connections others miss entirely", "Comfortable with solitude and independent work", "Brings clarity to muddled situations through precise thinking"],
    blindspots: ["Can retreat into thought at the expense of action", "May intellectualize emotions rather than feeling them", "Tendency to hoard knowledge as a form of control", "Can come across as detached or condescending without meaning to"],
    compatibility: "You thrive alongside The Luminary, whose boldness turns your insights into action. The Artisan shares your appreciation for depth, creating rich creative partnerships. Be patient with The Ember. Their emotional intensity may feel overwhelming, but they'll teach you about a kind of knowing that lives in the body, not the mind.",
    growth: "Your growth edge is embodiment. You know so much about the world through observation. Now learn it through experience. Take the cooking class. Say yes to the spontaneous road trip. Your understanding will only deepen when theory meets practice."
  },
  {
    name: "The Healer",
    badge: "Archetype IV: Empathic Nurturer",
    summary: "You feel the world more deeply than most people realize. Healers possess an almost psychic sensitivity to the emotional undercurrents in any room. You can sense tension, sadness, or unspoken needs before anyone has said a word. This isn't a skill you learned; it's woven into how you experience reality. People open up to you in ways that surprise even them, because your presence communicates something rare: genuine, unconditional acceptance. You don't just listen. You hold space.",
    traits: ["Empathic", "Nurturing", "Intuitive", "Gentle", "Self-sacrificing"],
    strengths: ["Creates deep emotional safety for others", "Natural ability to heal relational wounds", "Reads non-verbal cues with remarkable accuracy", "Brings warmth and humanity to cold environments"],
    blindspots: ["Absorbs others' emotions at the cost of your own wellbeing", "Can lose yourself in caretaking roles", "Difficulty setting boundaries without guilt", "May enable unhealthy patterns to avoid conflict"],
    compatibility: "Your depth pairs naturally with The Sentinel's loyalty and The Phoenix's resilience. You'll find The Architect's emotional reserve challenging but ultimately rewarding. They need your warmth more than they know. Watch for codependent patterns with The Ember.",
    growth: "Your growth edge is self-compassion with boundaries. Healing others is beautiful, but not at the cost of depleting yourself. Learning to say 'I care about you, and the answer is no' is your most important work. Your cup must be full before you can pour."
  },
  {
    name: "The Artisan",
    badge: "Archetype V: Creative Individualist",
    summary: "You experience the world through a lens of beauty, meaning, and emotional truth that most people don't even know exists. Artisans are the ones who notice the way light falls through a window, who find poetry in ordinary moments, who feel that life should be lived as a form of art. You are drawn to the authentic and the original. Imitation and conformity feel physically uncomfortable to you. Your inner world is rich, textured, and often more vivid than external reality.",
    traits: ["Creative", "Sensitive", "Authentic", "Expressive", "Idealistic"],
    strengths: ["Transforms emotions and experiences into meaning", "Brings originality and beauty to everything touched", "Deep capacity for emotional honesty", "Makes others feel permission to be themselves"],
    blindspots: ["Can romanticize suffering or melancholy", "May feel fundamentally 'different' in isolating ways", "Tendency to compare your inner world to others' outer lives", "Can withdraw when feeling misunderstood rather than reaching out"],
    compatibility: "You resonate deeply with The Ember's intensity and The Sage's depth. Creative partnerships with The Alchemist can be electric. Be mindful with The Catalyst. Their pragmatism may feel dismissive, but their grounding energy can help you finish what you start.",
    growth: "Your growth edge is finding beauty in the ordinary, not just the extraordinary. You don't need to be in a state of emotional intensity to be fully alive. Practice gratitude for the mundane: the boring Tuesday, the simple meal, the quiet evening. That's where most of life happens, and it's beautiful too."
  },
  {
    name: "The Catalyst",
    badge: "Archetype VI: Pragmatic Achiever",
    summary: "You have a gift for making things happen. While others are still debating possibilities, you've already built the first version. Catalysts are driven by a deep need to create tangible impact. Ideas without execution feel incomplete to you. You're the person who turns ambitious plans into operational realities, and you do it with an efficiency that borders on art. You measure your worth by results, and you hold yourself to standards that would exhaust most people.",
    traits: ["Driven", "Pragmatic", "Efficient", "Results-oriented", "Disciplined"],
    strengths: ["Exceptional ability to execute and deliver", "Cuts through noise to focus on what matters", "Sets and maintains high standards naturally", "Inspires productivity in those around them"],
    blindspots: ["Can equate self-worth with productivity", "May dismiss emotions as inefficient distractions", "Tendency to burn out by refusing to rest", "Can be impatient with process when focused on outcomes"],
    compatibility: "You and The Luminary make a powerhouse duo; vision meets execution. The Sentinel's reliability earns your deep respect. Be gentle with The Dreamer. Their pace isn't laziness; it's a different kind of processing that can yield insights your speed would miss.",
    growth: "Your growth edge is learning that you are not what you produce. Your value isn't your output. Practice doing nothing productive for an entire afternoon and sitting with the discomfort. You'll discover that you're still you — still valuable, still enough — even when the to-do list isn't done."
  },
  {
    name: "The Wanderer",
    badge: "Archetype VII: Adventurous Spirit",
    summary: "The world is too vast and too fascinating for you to stay in one place, one routine, or one way of thinking for very long. Wanderers are powered by an inexhaustible curiosity that pulls them toward the edges of experience: new places, new ideas, new people, new versions of themselves. You're not running from something; you're running toward everything. Your enthusiasm is genuinely infectious, and you have a gift for making ordinary moments feel like the beginning of an adventure.",
    traits: ["Adventurous", "Optimistic", "Versatile", "Spontaneous", "Energetic"],
    strengths: ["Makes even mundane situations feel exciting", "Adapts rapidly to new environments and challenges", "Brings levity and joy to heavy situations", "Connects ideas across wildly different domains"],
    blindspots: ["Can use novelty to avoid deeper emotional processing", "May struggle with follow-through when excitement fades", "Tendency to over-commit and under-deliver", "Can mistake restlessness for passion"],
    compatibility: "You light up around The Artisan, whose depth gives your breadth a place to land. The Sentinel grounds you without caging you. Treasure that friendship. Be honest with The Catalyst about your capacity; they'd rather hear 'no' upfront than chase you down later.",
    growth: "Your growth edge is stillness. Not every uncomfortable feeling needs to be outrun. The next time boredom or sadness arises, try staying with it for ten minutes before reaching for the next distraction. You'll find there's an adventure inside the stillness too, one you've been avoiding."
  },
  {
    name: "The Maverick",
    badge: "Archetype VIII: Bold Nonconformist",
    summary: "You were born questioning the rules, and you've never really stopped. Mavericks have an instinctive resistance to authority that isn't rebellion for its own sake. It's a deep-seated belief that most systems serve the system, not the people in it. You think from first principles, and you'd rather build something new than fix something broken. People either love your directness or find it threatening, and you've made peace with that divide. Your courage is quiet and total.",
    traits: ["Independent", "Bold", "Unconventional", "Direct", "Resilient"],
    strengths: ["Courage to challenge broken systems and norms", "Thinks originally, unconstrained by 'how it's always been done'", "Inspires others to question their assumptions", "Thrives under pressure and adversity"],
    blindspots: ["Can reject valid structures along with broken ones", "May alienate potential allies with bluntness", "Tendency to confuse contrarianism with critical thinking", "Can struggle with collaborative environments that require compromise"],
    compatibility: "You respect The Phoenix's strength and The Luminary's vision. Surprising depth emerges in friendships with The Healer, who sees past your armor. The Sentinel may frustrate you, but their perspective on stability is worth hearing. Not everything needs to be disrupted.",
    growth: "Your growth edge is discernment. Not every rule is a cage, and not every authority figure is wrong. Practice distinguishing between systems that genuinely need disrupting and ones that are working fine. Your rebellious energy is a gift. Channel it where it truly matters."
  },
  {
    name: "The Phoenix",
    badge: "Archetype IX: Resilient Transformer",
    summary: "You have been through things that would have broken most people, and you emerged not just intact but fundamentally changed. Phoenixes carry a quiet strength born from adversity, not the loud, performative kind, but the deep, unshakeable kind that comes from knowing your own capacity to survive and rebuild. You understand transformation because you've lived it, multiple times. This gives you a perspective that is simultaneously grounded and expansive, practical and deeply wise.",
    traits: ["Resilient", "Wise", "Transformative", "Grounded", "Intense"],
    strengths: ["Unshakeable inner strength built through experience", "Can hold space for others' darkest moments without flinching", "Practical wisdom that comes from lived experience, not theory", "Transforms personal pain into collective insight"],
    blindspots: ["May wear resilience as armor against vulnerability", "Can unconsciously seek intensity or crisis as familiar territory", "Tendency to dismiss others' struggles as 'not that bad'", "May resist asking for help, seeing it as weakness"],
    compatibility: "You and The Healer create profound, healing connections. The Luminary's forward vision complements your hard-won wisdom about the past. Be patient with The Wanderer. Their lightness isn't superficial; it's a different kind of survival strategy that you might learn from.",
    growth: "Your growth edge is softness. You've proven you can survive anything. Now prove you can thrive without needing to. Not every season needs to be a trial. Practice accepting ease, comfort, and even boredom without waiting for the other shoe to drop. You deserve peace, not just survival."
  },
  {
    name: "The Alchemist",
    badge: "Archetype X: Integrative Synthesizer",
    summary: "Where others see disconnected pieces, you see the hidden patterns that connect everything. Alchemists possess a rare cognitive gift: the ability to synthesize ideas, disciplines, and perspectives that seem completely unrelated into something new and greater than the sum of its parts. You're the person who connects the philosophical insight to the business strategy to the design principle to the human emotion underneath it all. Your mind doesn't just think outside the box. It dissolves the box entirely.",
    traits: ["Integrative", "Innovative", "Philosophical", "Adaptable", "Complex"],
    strengths: ["Sees connections between seemingly unrelated domains", "Creates novel solutions by combining existing ideas in new ways", "Comfortable with paradox and complexity", "Bridges different groups, disciplines, and worldviews"],
    blindspots: ["Can overcomplicate simple situations", "May struggle to explain insights in accessible terms", "Tendency to see so many connections that focus becomes difficult", "Can appear scattered or unfocused to linear thinkers"],
    compatibility: "You and The Sage form an intellectual partnership that can produce extraordinary insights. The Catalyst helps you ground your synthesis into actionable steps. The Artisan shares your appreciation for the non-obvious. Be mindful with The Sentinel, who may find your non-linear thinking unsettling.",
    growth: "Your growth edge is simplicity. Your greatest insights will be the ones you can explain to a twelve-year-old. Practice distilling your complex understanding into single, clear sentences. The Alchemist's true gold isn't complexity; it's the clarity that emerges on the other side of complexity."
  },
  {
    name: "The Ember",
    badge: "Archetype XI: Passionate Intensifier",
    summary: "You don't just feel things. You feel them in surround sound, high definition, with the volume all the way up. Embers experience life at a level of emotional intensity that is both their greatest gift and their greatest challenge. When you love, you love with your whole being. When you're angry, it's a righteous fire. When you're inspired, you become a force of nature. People describe being around you as 'a lot,' and you've learned that this is both a compliment and a warning, depending on who's speaking.",
    traits: ["Passionate", "Intense", "Magnetic", "Emotional", "Unfiltered"],
    strengths: ["Brings extraordinary energy and passion to everything", "Creates deep, memorable emotional connections", "Courage to feel and express what others suppress", "Catalyzes authenticity in groups; people drop their masks around you"],
    blindspots: ["Emotional intensity can overwhelm others", "May interpret situations through an overly personal lens", "Tendency toward all-or-nothing thinking in relationships", "Can mistake intensity for intimacy"],
    compatibility: "You and The Artisan understand each other's emotional depth intuitively. The Phoenix can match your intensity without being consumed by it. The Sage offers a complementary perspective. Their coolness isn't rejection; it's a different operating system that can help regulate yours.",
    growth: "Your growth edge is modulation, not suppression. Your feelings are valid and valuable. The work is learning to express them at a volume that lets others hear the message. Practice the pause between feeling and expression. That pause isn't censorship; it's craftsmanship."
  },
  {
    name: "The Architect",
    badge: "Archetype XII: Systematic Builder",
    summary: "You see the world as a series of systems waiting to be designed, optimized, and perfected. Architects possess an extraordinary ability to think in structures, whether it's an organization, a codebase, a daily routine, or a philosophy of life, you instinctively map the components, relationships, and leverage points. Your mind craves order not for its own sake, but because you understand that good design is invisible: the best systems are the ones people don't even notice because they just work.",
    traits: ["Systematic", "Precise", "Strategic", "Detail-oriented", "Methodical"],
    strengths: ["Designs elegant solutions to complex structural problems", "Exceptional attention to detail without losing the big picture", "Creates frameworks that others can build upon", "Brings order and efficiency to chaotic environments"],
    blindspots: ["Can become perfectionistic to the point of paralysis", "May prioritize the system over the people within it", "Tendency to over-engineer simple problems", "Can struggle when situations require improvisation over planning"],
    compatibility: "You and The Catalyst make a formidable team; strategy meets execution. The Alchemist challenges your thinking in productive ways. The Healer helps you remember that systems serve humans, not the other way around. Be open to The Wanderer's spontaneity. Some of the best designs emerge from chaos.",
    growth: "Your growth edge is embracing imperfection. The 80% solution shipped today creates more value than the 100% solution that ships never. Practice releasing work before it feels 'done.' You'll discover that real-world feedback teaches you more than another planning cycle ever could."
  },
  {
    name: "The Dreamer",
    badge: "Archetype XIII: Idealistic Visionary",
    summary: "You live in the gap between the world as it is and the world as it could be, and you refuse to accept that the gap has to exist. Dreamers carry an unshakeable idealism that isn't naive; it's fierce. You believe in potential: human potential, creative potential, the potential of every situation to be something more beautiful than it currently is. While pragmatists focus on constraints, you focus on possibilities. This makes you both a source of inspiration and, occasionally, a source of frustration to the realists around you.",
    traits: ["Idealistic", "Imaginative", "Hopeful", "Gentle", "Visionary"],
    strengths: ["Sees possibility where others see only limitation", "Inspires hope and motivation in difficult times", "Rich inner world that fuels creative and compassionate action", "Holds space for what could be, even when it seems impossible"],
    blindspots: ["Can become disillusioned when reality doesn't match the vision", "May avoid necessary confrontation to preserve harmony", "Tendency to live in the future rather than the present", "Can struggle with practical execution of beautiful ideas"],
    compatibility: "You and The Luminary share a visionary sensibility but express it differently. Together, you're unstoppable. The Catalyst can be your best friend or your greatest frustration, depending on whether you learn to value their practicality as a bridge to your dreams. The Healer understands your gentle nature instinctively.",
    growth: "Your growth edge is grounded action. Dreams without execution are just wishes. Practice breaking your visions into the smallest possible first step and taking it today, not tomorrow. You don't have to abandon idealism to be practical. The most powerful dreamers are the ones who also build."
  },
  {
    name: "The Mirror",
    badge: "Archetype XIV: Reflective Empath",
    summary: "You have an almost uncanny ability to reflect back to people who they truly are, often more clearly than they can see themselves. Mirrors are the rarest of empaths: rather than absorbing others' emotions, you illuminate them. In your presence, people have breakthrough realizations, not because you told them anything, but because your way of listening and responding creates a space where truth becomes visible. You are less a personality type and more a personality catalyst.",
    traits: ["Reflective", "Perceptive", "Adaptive", "Thoughtful", "Authentic"],
    strengths: ["Helps others achieve self-understanding through reflection", "Adapts communication style intuitively to each person", "Creates breakthrough moments in conversations", "Sees people's blind spots with compassion rather than judgment"],
    blindspots: ["Can lose sense of personal identity while reflecting others", "May struggle to access own feelings independently", "Tendency to derive self-worth from being 'useful' to others", "Can become chameleon-like, shifting too much in different contexts"],
    compatibility: "You and The Healer share empathic gifts but express them differently. Together, you create extraordinary emotional spaces. The Maverick's strong identity helps anchor you when you feel yourself dissolving. The Artisan helps you access your own creative voice, separate from reflection.",
    growth: "Your growth edge is self-definition. Spend time regularly asking: 'What do I want, not what does this person need from me?' Your gift of reflection is most powerful when it flows from a strong, stable sense of self. You can only truly mirror others when you know your own face."
  },
  {
    name: "The Keeper",
    badge: "Archetype XV: Harmonious Steward",
    summary: "You are the quiet center that holds everything together. Keepers possess a rare combination of humility and strength. You don't need recognition to do important work, and you don't need authority to have influence. Your power lies in your consistency, your attention to the things that others overlook, and your deep commitment to maintaining the health and harmony of any community you belong to. You are the person who remembers birthdays, who checks in after the crisis is over, who tends the garden while others chase the horizon.",
    traits: ["Harmonious", "Humble", "Consistent", "Attentive", "Grounding"],
    strengths: ["Maintains the health of communities and relationships over time", "Notices and attends to what others overlook", "Creates a stabilizing presence that enables others to take risks", "Deep wisdom about what truly matters versus what merely seems urgent"],
    blindspots: ["Can prioritize others' needs until personal boundaries erode", "May avoid change even when it's necessary and overdue", "Tendency to undervalue own contributions and impact", "Can enable unhealthy group dynamics by prioritizing peace over truth"],
    compatibility: "You and The Phoenix create a powerful balance of transformation and stability. The Wanderer's energy enlivens your groundedness. The Luminary appreciates your ability to maintain what they build. Be mindful with The Ember. Their intensity can disrupt the harmony you work to maintain, but their passion also prevents stagnation.",
    growth: "Your growth edge is visibility. Stop hiding behind the work. Your contributions matter, and acknowledging that isn't arrogance; it's accuracy. Practice saying 'I did that' when you did. The world needs Keepers who are willing to be seen, not just felt."
  }
];

// ============================================
// Quiz State
// ============================================
let currentQuestion = 0;
let answers = {};

function showScreen(id) {
  document.querySelectorAll('.quiz-screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById(id);
  screen.classList.add('active');
  // Re-trigger animation
  screen.style.animation = 'none';
  screen.offsetHeight; // force reflow
  screen.style.animation = '';
}

function startQuiz() {
  currentQuestion = 0;
  answers = {};
  showScreen('quiz-questions');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQuestion];
  const total = questions.length;

  document.getElementById('q-current').textContent = currentQuestion + 1;
  document.getElementById('q-total').textContent = total;

  const pct = Math.round((currentQuestion / total) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-pct').textContent = pct + '%';

  document.getElementById('question-text').textContent = q.text;

  const grid = document.getElementById('answers-grid');
  const letters = ['A', 'B', 'C', 'D'];
  grid.innerHTML = q.answers.map((a, i) => `
    <button class="answer-option ${answers[currentQuestion] === i ? 'selected' : ''}"
            onclick="selectAnswer(${i})">
      <span class="answer-letter">${letters[i]}</span>
      <span class="answer-option-text">${a.text}</span>
    </button>
  `).join('');

  document.getElementById('btn-back').disabled = currentQuestion === 0;

  const btnNext = document.getElementById('btn-next');
  const isLast = currentQuestion === total - 1;
  btnNext.textContent = isLast ? 'See Results →' : 'Next →';
  btnNext.disabled = answers[currentQuestion] === undefined;
}

function selectAnswer(index) {
  answers[currentQuestion] = index;
  document.querySelectorAll('.answer-option').forEach((el, i) => {
    el.classList.toggle('selected', i === index);
  });
  document.getElementById('btn-next').disabled = false;
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showLoading();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

// ============================================
// Loading Animation
// ============================================
function showLoading() {
  showScreen('quiz-loading');

  const steps = [
    "Mapping personality dimensions...",
    "Analyzing response patterns...",
    "Cross-referencing archetype models...",
    "Calculating dominant traits...",
    "Generating your profile..."
  ];

  let step = 0;
  const stepEl = document.getElementById('loading-step');
  const barEl = document.getElementById('loading-bar-fill');

  const interval = setInterval(() => {
    step++;
    if (step < steps.length) {
      stepEl.textContent = steps[step];
      barEl.style.width = ((step + 1) / steps.length * 100) + '%';
    } else {
      clearInterval(interval);
      showResults();
    }
  }, 700);

  barEl.style.width = '20%';
}

// ============================================
// Results
// ============================================
function showResults() {
  // Pick a "random" personality seeded by answers
  const answerSum = Object.values(answers).reduce((a, b) => a + b, 0);
  const index = answerSum % personalities.length;
  const p = personalities[index];

  document.getElementById('result-type-name').textContent = p.name;
  document.getElementById('result-type-badge').textContent = p.badge;
  document.getElementById('result-summary').textContent = p.summary;

  document.getElementById('traits-grid').innerHTML = p.traits
    .map(t => `<span class="trait-tag">${t}</span>`)
    .join('');

  document.getElementById('result-strengths').innerHTML = p.strengths
    .map(s => `<li>${s}</li>`)
    .join('');

  document.getElementById('result-blindspots').innerHTML = p.blindspots
    .map(b => `<li>${b}</li>`)
    .join('');

  document.getElementById('result-compat-text').textContent = p.compatibility;
  document.getElementById('result-growth-text').textContent = p.growth;

  showScreen('quiz-results');
}

function retakeQuiz() {
  showScreen('quiz-intro');
}

function shareResults() {
  const name = document.getElementById('result-type-name').textContent;
  const badge = document.getElementById('result-type-badge').textContent;
  const text = `I'm ${name} (${badge}). Take the Enneagram personality quiz to discover yours!`;

  if (navigator.share) {
    navigator.share({ title: 'My Enneagram Archetype', text: text });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      const toast = document.createElement('div');
      toast.className = 'share-toast';
      toast.textContent = 'Copied to clipboard!';
      document.body.appendChild(toast);
      requestAnimationFrame(() => toast.classList.add('visible'));
      setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 300);
      }, 2000);
    });
  }
}
