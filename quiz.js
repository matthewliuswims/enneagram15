// ============================================
// Quiz Questions
// ============================================
const questions = [
  {
    text: "When you walk into a room full of strangers, what is your first instinct?",
    answers: [
      { text: "Climb a tree or play dead", id: "a", type: 9 },
      { text: "Turn yourself into a mist", id: "b", type: 10 },
      { text: "Get to know the people nearest to you", id: "c", type: 11 },
      { text: "SMASH", id: "d", type: 12 },
      { text: "Find war donors", id: "e", type: 13 },
      { text: "Just vibe", id: "f", type: 14 }
    ]
  },
  {
    text: "When you disagree with someone you respect, you typically:",
    answers: [
      { text: "Try to relax together with a friendly massage", id: "a", type: 14 },
      { text: "Declare war", id: "b", type: 13 },
      { text: "Keel over", id: "c", type: 9 },
      { text: "Avoid the subject", id: "d", type: 10 },
      { text: "SMASH", id: "e", type: 12 },
      { text: "Handle the disagreement with care", id: "f", type: 11 }
    ]
  },
  {
    text: "How do your friends describe you?",
    answers: [
      { text: "Friendly and cheerful", id: "a", type: 11 },
      { text: "💲💲💲", id: "b", type: 13 },
      { text: "Fluffy", id: "c", type: 9 },
      { text: "Wednesday", id: "d", type: 10 },
      { text: "Deep", id: "e", type: 14 },
      { text: "Angry", id: "f", type: 12 }
    ]
  },
  {
    text: "Which statement most deeply resonates with you?",
    answers: [
      { text: "\"Join our Bible Study tonight!\"", id: "a", type: 11 },
      { text: "\"I am a kingdom of marsupials\"", id: "b", type: 9 },
      { text: "\"HULK SMASH\"", id: "c", type: 12 },
      { text: "\"Shiatsu or Deep Tissue?\"", id: "d", type: 14 },
      { text: "\"Life is a conundrum of esoterica\"", id: "e", type: 10 },
      { text: "\"You're fired\"", id: "f", type: 13 }
    ]
  },
  {
    text: "When making a big life decision, you rely most on:",
    answers: [
      { text: "My medical degree", id: "a", type: 12 },
      { text: "Myself", id: "b", type: 13 },
      { text: "Weekly rituals", id: "c", type: 10 },
      { text: "Faith and family", id: "d", type: 11 },
      { text: "My sense of smell", id: "e", type: 9 },
      { text: "A quiet, if medically threatening, moment of rest", id: "f", type: 14 }
    ]
  },
  {
    text: "Choose a color:",
    answers: [
      { text: "Black", id: "a", type: 14 },
      { text: "Orange", id: "b", type: 13 },
      { text: "Green", id: "c", type: 12 },
      { text: "Grey", id: "d", type: 9 },
      { text: "Blue", id: "e", type: 11 },
      { text: "Colorless", id: "f", type: 10 }
    ]
  },
  {
    text: "What does the world need more of?",
    answers: [
      { text: "SMASH!", id: "a", type: 12 },
      { text: "Roller mechanisms!", id: "b", type: 14 },
      { text: "Unsung weekdays!", id: "c", type: 10 },
      { text: "Trees!", id: "d", type: 9 },
      { text: "GradIV!", id: "e", type: 11 },
      { text: "War!", id: "f", type: 13 }
    ]
  },
  {
    text: "What is the song of your people?",
    answers: [
      { text: "Primordial screaming", id: "a", type: 9 },
      { text: "Primordial screaming", id: "b", type: 10 },
      { text: "Primordial screaming", id: "c", type: 11 },
      { text: "Primordial screaming", id: "d", type: 12 },
      { text: "Primordial screaming", id: "e", type: 13 },
      { text: "Primordial screaming", id: "f", type: 14 }
    ]
  },
  {
    text: "What is one of your favorite snacks?",
    answers: [
      { text: "Ashes", id: "a", type: 10 },
      { text: "Dumplings", id: "b", type: 11 },
      { text: "Caviar", id: "c", type: 13 },
      { text: "Tired undergraduates", id: "d", type: 14 },
      { text: "SMASH burgers", id: "e", type: 12 },
      { text: "Garbage or overripe grapes", id: "f", type: 9 }
    ]
  },
  {
    text: "You are giving a presentation at PowerPoint Night, what is it about?",
    answers: [
      { text: "Mighty Ducks the Musical: How the Best Disney Film Franchise Took to the Stage", id: "a", type: 11 },
      { text: "What is Wednesday?", id: "b", type: 10 },
      { text: "ME ANGRY ME SMASH", id: "c", type: 12 },
      { text: "Between Biohazard and Rest: Who is Cleaning Those PCL Massage Chairs?", id: "d", type: 14 },
      { text: "Spreading Love, Not Disease: The Benefit of Possums", id: "e", type: 9 },
      { text: "Mongering for a Good Time: War and How to Fill Your Pockets the Demagogue Way", id: "f", type: 13 }
    ]
  }
];

// ============================================
// 15 Personality Archetypes
// ============================================
const personalities = [
  {
    name: "The Perfectionist",
    badge: "Type 1",
    summary: "You are principled, purposeful, and self-controlled. You have a deep sense of right and wrong and a powerful internal compass that guides everything you do. You hold yourself to extraordinarily high standards, not because anyone asks you to, but because you believe in doing things properly. Your integrity is your defining trait, and people trust you because they know you mean what you say. You bring order, clarity, and moral seriousness to everything you touch.",
    traits: ["Principled", "Purposeful", "Self-controlled", "Ethical", "Precise"],
    strengths: ["Unwavering commitment to doing what's right", "Brings clarity and structure to chaotic situations", "Naturally inspires trust through consistent integrity", "Attention to detail that ensures quality in everything"],
    blindspots: ["Can become overly critical of yourself and others", "May struggle to relax or accept 'good enough'", "Tendency to see the world in black and white", "Can suppress emotions in favor of being 'correct'"],
    compatibility: "You connect naturally with The Giver's warmth and The Investigator's precision. The Enthusiast helps you loosen up and remember that life isn't just about getting things right.",
    growth: "Your growth edge is learning that imperfection is not failure. Practice letting things be messy sometimes. The world needs your standards, but it also needs you to be gentle with yourself."
  },
  {
    name: "The Giver",
    badge: "Type 2",
    summary: "You are generous, demonstrative, and people-pleasing. Your instinct is to care for others, often before you think of yourself. You have an extraordinary ability to sense what people need and a deep desire to provide it. Your warmth is genuine and your generosity runs deep. People feel safe around you because you radiate acceptance and concern. You build your world around relationships, and your greatest joy comes from knowing you've made someone's life better.",
    traits: ["Generous", "Demonstrative", "People-pleasing", "Warm", "Attentive"],
    strengths: ["Extraordinary emotional intelligence and empathy", "Makes others feel valued and cared for", "Builds and maintains deep personal connections", "Selfless generosity that creates strong communities"],
    blindspots: ["Can lose yourself in caring for others", "May give to get, then feel resentful when unreciprocated", "Difficulty acknowledging your own needs", "Can become possessive of the people you help"],
    compatibility: "You pair well with The Achiever's energy and The Peacemaker's calm acceptance. The Challenger pushes you to stand up for your own needs, which you desperately need.",
    growth: "Your growth edge is learning to receive. You give so freely, but accepting help feels uncomfortable. Practice asking for what you need directly, without earning it first."
  },
  {
    name: "The Achiever",
    badge: "Type 3",
    summary: "You are adaptable, excelling, driven, and image-conscious. You have an almost supernatural ability to read a room and become exactly what the situation requires. Success isn't just something you pursue; it's who you are. You set goals and hit them with a consistency that amazes people around you. Your energy is infectious, your confidence is magnetic, and your results speak for themselves. You believe that anything worth doing is worth doing exceptionally well.",
    traits: ["Adaptable", "Excelling", "Driven", "Image-conscious", "Ambitious"],
    strengths: ["Exceptional ability to set and achieve ambitious goals", "Natural charisma that motivates teams and organizations", "Adapts quickly to new challenges and environments", "Turns vision into tangible, measurable results"],
    blindspots: ["Can confuse who you are with what you achieve", "May prioritize appearance over authenticity", "Tendency to cut corners on relationships in pursuit of goals", "Can burn out chasing external validation"],
    compatibility: "You thrive alongside The Individualist's depth and The Skeptic's loyalty. The Peacemaker reminds you that not everything needs to be a competition.",
    growth: "Your growth edge is stillness. You are enough even when you're not producing. Practice sitting with yourself without a goal, an agenda, or an audience. That's where you'll find the real you."
  },
  {
    name: "The Individualist",
    badge: "Type 4",
    summary: "You are expressive, dramatic, and self-absorbed. But that self-absorption isn't vanity; it's depth. You experience the world with an emotional richness that most people can barely imagine. Beauty moves you. Loss shapes you. You feel things at frequencies others can't detect. Your inner world is a cathedral of feeling, memory, and meaning. You refuse to be ordinary because you genuinely aren't, and you'd rather feel pain deeply than not feel at all.",
    traits: ["Expressive", "Dramatic", "Self-absorbed", "Sensitive", "Authentic"],
    strengths: ["Unmatched emotional depth and self-awareness", "Creates beauty and meaning from raw experience", "Courage to be vulnerable and authentic", "Sees the poetry in life that others walk right past"],
    blindspots: ["Can wallow in melancholy and romanticize suffering", "May feel fundamentally different from everyone else", "Tendency to envy what others have while devaluing what you have", "Can withdraw into fantasy when reality feels too ordinary"],
    compatibility: "You resonate with The Investigator's depth and The Giver's warmth. The Achiever challenges you to translate feelings into action, which is medicine you need.",
    growth: "Your growth edge is equanimity. Not every moment needs to be profound. Practice finding richness in the ordinary. The Tuesday afternoon, the routine errand -- these are life too, and they're worthy of your attention."
  },
  {
    name: "The Investigator",
    badge: "Type 5",
    summary: "You are perceptive, innovative, secretive, and isolated. Your mind is your sanctuary and your superpower. You observe the world with a precision and depth that borders on x-ray vision, cataloging patterns and building mental models that explain how everything works. Knowledge isn't just interesting to you; it's essential. It's how you feel safe. You'd rather understand the world from a distance than be swept up in its chaos, and the insights you generate from that vantage point are often extraordinary.",
    traits: ["Perceptive", "Innovative", "Secretive", "Isolated", "Cerebral"],
    strengths: ["Extraordinary analytical and observational abilities", "Can master complex subjects with deep, focused study", "Generates original insights others would never reach", "Comfortable with solitude and independent thinking"],
    blindspots: ["Can detach from emotions and relationships", "May hoard knowledge and resources out of scarcity fears", "Tendency to observe life rather than participate in it", "Can become increasingly isolated and eccentric"],
    compatibility: "You connect with The Individualist's depth and The Skeptic's analytical mind. The Challenger pushes you out of your head and into the world, which is exactly what you need.",
    growth: "Your growth edge is engagement. You know enough. Now step into the arena. Practice sharing your insights before they feel 'complete.' The world needs your brilliance in real time, not after years of private refinement."
  },
  {
    name: "The Skeptic",
    badge: "Type 6",
    summary: "You are engaging, responsible, anxious, and suspicious. Your mind is a threat-detection system running at full power at all times. You see the risks, the angles, the ways things could go wrong -- and this makes you an extraordinarily valuable person to have around. Your loyalty, once earned, is absolute. You show up for your people with a fierce, protective devotion that never wavers. You question authority not because you're rebellious, but because you've learned that trust must be earned, not assumed.",
    traits: ["Engaging", "Responsible", "Anxious", "Suspicious", "Loyal"],
    strengths: ["Unshakeable loyalty to people and causes you believe in", "Exceptional ability to anticipate and mitigate risks", "Strong sense of responsibility and follow-through", "Courage that emerges precisely when things get dangerous"],
    blindspots: ["Can project worst-case scenarios onto ambiguous situations", "May test people's loyalty in ways that push them away", "Tendency toward anxiety and second-guessing decisions", "Can become contrarian or rebellious under stress"],
    compatibility: "You bond deeply with The Peacemaker's reassurance and The Achiever's confidence. The Enthusiast helps you see the upside and take the leap when your anxiety says don't.",
    growth: "Your growth edge is trust -- in yourself, in others, in the process. You've survived every worst-case scenario your mind has invented. Practice noticing when things go right. Build a catalog of evidence that the world is safer than your fear suggests."
  },
  {
    name: "The Enthusiast",
    badge: "Type 7",
    summary: "You are spontaneous, versatile, and scattered. The world is a buffet and you want to try everything on it, twice. Your mind moves at the speed of possibility, generating ideas, plans, and adventures faster than any one lifetime could contain. Your optimism is genuine and infectious. People light up around you because your energy says 'life is an adventure and you're invited.' You reframe problems as opportunities so instinctively that people sometimes wonder if anything ever gets you down.",
    traits: ["Spontaneous", "Versatile", "Scattered", "Optimistic", "Energetic"],
    strengths: ["Generates enthusiasm and momentum in any situation", "Connects ideas across wildly different domains", "Remarkable ability to reframe negatives into positives", "Brings joy, levity, and adventure wherever you go"],
    blindspots: ["Can use constant activity to avoid painful emotions", "May commit to everything and follow through on nothing", "Tendency to escape discomfort rather than sit with it", "Can mistake breadth for depth"],
    compatibility: "You spark with The Investigator's depth and The Perfectionist's structure. The Skeptic grounds your optimism in reality, which makes your plans actually achievable.",
    growth: "Your growth edge is depth. Slow down long enough to feel what's underneath the excitement. The next time sadness or boredom shows up, don't run. Sit with it. There's a richness in stillness that your constant motion has been keeping from you."
  },
  {
    name: "The Challenger",
    badge: "Type 8",
    summary: "You are self-confident, decisive, confrontational, and willful. You take up space unapologetically and you wouldn't have it any other way. Your presence commands attention not because you demand it, but because your energy is undeniable. You see the world in terms of strength and justice, and you have zero patience for people who abuse power or exploit the vulnerable. Underneath your tough exterior is a fiercely protective heart that would go to war for the people you love.",
    traits: ["Self-confident", "Decisive", "Confrontational", "Willful", "Protective"],
    strengths: ["Natural leadership that inspires confidence in others", "Courage to confront injustice and stand up for the vulnerable", "Decisive action in situations where others hesitate", "Fierce loyalty and protectiveness toward your people"],
    blindspots: ["Can intimidate people without realizing it", "May see vulnerability as weakness in yourself and others", "Tendency to dominate conversations and decisions", "Can escalate conflicts when de-escalation would serve better"],
    compatibility: "You respect The Investigator's independence and The Giver's heart. The Peacemaker softens your edges and reminds you that not every hill is worth dying on.",
    growth: "Your growth edge is vulnerability. You've mastered strength. Now master the courage it takes to be soft. Letting people see your tender side isn't weakness; it's the bravest thing you can do."
  },
  {
    name: "The Peacemaker",
    badge: "Type 9",
    summary: "You are receptive, reassuring, complacent, and resigned. Your gift is harmony. You can walk into a room full of conflict and somehow make everyone feel heard, understood, and a little calmer. You see every perspective, which makes you an extraordinary mediator but can also make it hard to know what you actually want. Your easygoing nature isn't laziness; it's a profound desire for inner and outer peace. You want everyone to be okay, sometimes at the cost of your own needs going unspoken.",
    traits: ["Receptive", "Reassuring", "Complacent", "Resigned", "Harmonious"],
    strengths: ["Creates peace and harmony in any environment", "Sees and validates multiple perspectives simultaneously", "Calming, reassuring presence that puts people at ease", "Deep patience and acceptance of others as they are"],
    blindspots: ["Can merge with others' agendas and lose your own voice", "May numb out or disengage to avoid conflict", "Tendency to go along to get along, even when it costs you", "Can become passive-aggressive when unexpressed needs build up"],
    compatibility: "You balance beautifully with The Challenger's directness and The Achiever's drive. The Individualist helps you access emotions you've been suppressing.",
    growth: "Your growth edge is showing up. Your voice matters. Your preferences matter. Practice saying 'I want' and 'I don't want' without softening it into 'whatever you think.' The world needs your peace, but it needs your presence even more."
  },
  {
    name: "The Kingdom of Possums",
    badge: "Type 10",
    summary: "You are an entire kingdom, not merely a person. Where others have a personality, you have a population -- a teeming marsupial collective operating under one shared consciousness. You navigate the world nocturnally, seeing clearly in situations that leave others blind. Your immune system is legendary; you're impervious to toxins that would fell lesser types. You experience the world through whiskers and instinct, hanging from branches both literal and metaphorical, surveying your domain with quiet, prehensile authority.",
    traits: ["Nocturnal", "Immune", "Sensitive", "Prehensile", "Collective"],
    strengths: ["Thrives in darkness and uncertainty where others stumble", "Naturally resistant to toxic environments and people", "Extraordinary sensory awareness of surroundings", "Can hang on to anything -- ideas, relationships, tree branches"],
    blindspots: ["Tendency to play dead when confronted directly", "May hiss at people who are just trying to help", "Can be overly territorial about garbage cans", "Others may find your nocturnal schedule difficult to work around"],
    compatibility: "You coexist peacefully with The Wednesday's evasiveness and The TW's hospitality. The Hulk's energy startles you, but their directness is oddly refreshing when you stop playing dead.",
    growth: "Your growth edge is daylight. You've mastered the dark, but there's a whole world happening between sunrise and sunset. Practice being seen. Not everything is a predator, and sometimes the safest thing to do is stop playing dead and just be alive."
  },
  {
    name: "The Wednesday",
    badge: "Type 11",
    summary: "You are indescribable, subjective, and evasive. You exist in the most overlooked part of the week, the day everyone forgets, the hump no one asked for but everyone has to cross. And yet you are essential. Without you, the week collapses. You move through life with a quiet defiance, refusing to be categorized or pinned down. People try to describe you and find they can't quite capture it. That's not a bug; it's your defining feature. You are the liminal space between what was and what will be.",
    traits: ["Indescribable", "Subjective", "Evasive", "Liminal", "Essential"],
    strengths: ["Impossible to pin down, which makes you impossible to defeat", "Provides essential structure that everyone takes for granted", "Thrives in ambiguity and in-between spaces", "Connects the beginning of things to their endings"],
    blindspots: ["Nobody ever picks you as their favorite", "Can feel perpetually overlooked and underappreciated", "Tendency to define yourself by what you're not rather than what you are", "May struggle with identity when asked direct questions about yourself"],
    compatibility: "You find kinship with The Kingdom of Possums' nocturnal energy and The Massage Chairs' existential complexity. The Warmongering Demagogue's intensity gives you something to react against, which helps you feel more defined.",
    growth: "Your growth edge is claiming your identity. Stop being the day people get through and start being the day people look forward to. You are more than a placeholder in someone else's week. Own your Wednesday-ness with pride."
  },
  {
    name: "The TW",
    badge: "Type 12",
    summary: "You are hospitable, curious, spirited, and dedicated. You welcome people into your world with open arms and an open mind. Your curiosity is genuine and boundless; you want to know how things work, why people are the way they are, and what happens if you try something nobody's tried before. Your spirit is contagious. You bring energy and dedication to everything you commit to, and you commit to a lot because you genuinely believe that showing up matters.",
    traits: ["Hospitable", "Curious", "Spirited", "Dedicated", "Welcoming"],
    strengths: ["Creates welcoming spaces where everyone feels they belong", "Infectious enthusiasm that elevates the energy of any group", "Deep commitment to the people and causes you care about", "Natural curiosity that leads to unexpected discoveries"],
    blindspots: ["Can overextend yourself trying to welcome everyone", "May take on others' problems as your own", "Tendency to say yes when you should say 'not right now'", "Can lose yourself in service to community"],
    compatibility: "You harmonize with The Giver's warmth and The Enthusiast's energy. The Kingdom of Possums' independence teaches you that not everyone needs to be welcomed -- some prefer the dark, and that's okay.",
    growth: "Your growth edge is boundaries. Your hospitality is beautiful, but you don't have to set a place at the table for everyone all the time. Practice the sacred art of closing the door -- not in anger, but in self-preservation. A host who burns out helps no one."
  },
  {
    name: "The Hulk",
    badge: "Type 13",
    summary: "HULK SMASH. That's not just a catchphrase; it's a worldview. You experience reality at maximum intensity, all the time. Where others deliberate, you act. Where others calculate, you smash. This isn't mindlessness -- it's a radical commitment to directness that cuts through every layer of pretense and complication. You are pure force, pure honesty, pure green. People either get out of your way or get carried along in your wake. There is no middle ground with you, and you wouldn't want there to be.",
    traits: ["Forceful", "Direct", "Intense", "Unstoppable", "Green"],
    strengths: ["Cuts through complexity with decisive, immediate action", "Impossible to ignore or dismiss", "Brings raw, honest energy to every situation", "When something needs to be destroyed and rebuilt, you're the one to call"],
    blindspots: ["Not every problem is solved by smashing it", "Can leave collateral damage in your wake without noticing", "Tendency to escalate when de-escalation would work better", "May struggle with situations that require subtlety or patience"],
    compatibility: "You clash productively with The Warmongering Demagogue's intensity and respect The TW's dedication. The Wednesday confuses you, but their evasiveness is the one thing you can't smash, which teaches you humility.",
    growth: "Your growth edge is restraint. You've mastered the smash. Now master the pause. The moment between impulse and action is where wisdom lives. Not everything needs to be broken to be fixed. Sometimes the strongest move is standing still."
  },
  {
    name: "The Warmongering Demagogue",
    badge: "Type 14",
    summary: "You are antagonistic, authoritarian, combative, and the literal worst. You didn't choose this path; this path chose you, and then you conquered the path and renamed it after yourself. You see the world as a series of conflicts to be won, alliances to be leveraged, and opponents to be vanquished. Your charisma is undeniable but deeply suspect. People follow you not because you're right, but because you've made it very clear what happens to people who don't.",
    traits: ["Antagonistic", "Authoritarian", "Combative", "The Literal Worst", "Charismatic"],
    strengths: ["Unmatched ability to mobilize people through sheer force of personality", "Strategic thinking that's always three moves ahead", "Absolutely will not quit, ever, under any circumstances", "Creates clarity by turning every situation into a zero-sum game"],
    blindspots: ["You are, objectively, the literal worst", "Confuses being feared with being respected", "Tendency to start wars that didn't need starting", "Can't tell the difference between leadership and domination"],
    compatibility: "You clash with everyone, which is exactly how you like it. The Hulk matches your intensity without flinching. The Massage Chairs in the PCL are the one opponent you can't conquer, because you can't declare war on furniture. Or can you?",
    growth: "Your growth edge is peace. Radical, uncomfortable, excruciating peace. Practice going an entire day without antagonizing anyone. It will feel like defeat. It isn't. The strongest demagogues are the ones who learn they don't have to be."
  },
  {
    name: "The Massage Chairs in the PCL",
    badge: "Type 15",
    summary: "You know how those massage chairs in the PCL on the fourth floor in the wellness room -- someone is always sitting in one so you can't use it, but when they're free, you start looking at the chair and then the chair starts looking back at you saying, \"Hey, I'm a biohazard, come sit on me and become patient zero for this new thing I'm cooking up over here\" and you start to think, \"Hey, maybe I'm not about that right now,\" but also I'm pretty tense and grad school is hard, so you sit in the chair anyway. That is what this personality type is like.",
    traits: ["Inviting", "Suspicious", "Therapeutic", "Biohazardous", "Irresistible"],
    strengths: ["Offers comfort and relief precisely when people need it most", "Always present on the fourth floor, rain or shine", "Creates a space where people confront their own risk tolerance", "Teaches valuable lessons about the tension between comfort and hygiene"],
    blindspots: ["May be harboring things that haven't been clinically identified yet", "Always occupied when you actually need one", "Gives comfort that comes with an unspoken asterisk", "People who use you never quite feel clean afterward"],
    compatibility: "You get along with everyone who's stressed enough to sit down. The Wednesday understands your existential ambiguity. The Kingdom of Possums respects your immune system implications. The Warmongering Demagogue has tried to declare war on you but can't figure out the logistics.",
    growth: "Your growth edge is self-care. Ironic, since you literally exist to provide care. But when was the last time someone sanitized you? Practice receiving maintenance. You can't knead away other people's tension if your own rollers are compromised. Take a day off. Get wiped down. You've earned it."
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
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
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

  // Hide hint when navigating to a new question
  document.getElementById('answer-hint').classList.remove('visible');
}

function selectAnswer(index) {
  answers[currentQuestion] = index;
  document.querySelectorAll('.answer-option').forEach((el, i) => {
    el.classList.toggle('selected', i === index);
  });
  document.getElementById('answer-hint').classList.remove('visible');
}

function nextQuestion() {
  if (answers[currentQuestion] === undefined) {
    // Shake the answers grid and show hint
    const grid = document.getElementById('answers-grid');
    grid.classList.remove('shake');
    grid.offsetHeight; // force reflow
    grid.classList.add('shake');
    document.getElementById('answer-hint').classList.add('visible');
    return;
  }

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
  // Tally which type was selected most across all questions
  const typeCounts = {};
  Object.entries(answers).forEach(([qIndex, aIndex]) => {
    const type = questions[qIndex].answers[aIndex].type;
    typeCounts[type] = (typeCounts[type] || 0) + 1;
  });
  // Find the type with the highest count (random tiebreak)
  const maxCount = Math.max(...Object.values(typeCounts));
  const topTypes = Object.keys(typeCounts).filter(t => typeCounts[t] === maxCount);
  const winningType = topTypes[Math.floor(Math.random() * topTypes.length)];
  const p = personalities[parseInt(winningType)];

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
