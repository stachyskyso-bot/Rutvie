// charge le JSON local (profile.json) et remplit la page
async function loadProfile(){
  try {
    const res = await fetch('profile.json');
    if(!res.ok) throw new Error('Impossible de charger profile.json');
    const data = await res.json();

    document.getElementById('role').textContent = data.title;
    document.getElementById('tagline').textContent = data.tagline;
    document.getElementById('email').textContent = data.contact.email;
    document.getElementById('email').href = 'mailto:' + data.contact.email;
    document.getElementById('linkedin').href = data.contact.linkedin;
    document.getElementById('linkedin').textContent = data.contact.linkedinText || 'LinkedIn';

    // skills
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = '';
    (data.skills || []).forEach((s,i)=>{
      const el = document.createElement('div');
      el.className = 'skill-pill' + (i===0 ? ' highlight' : '');
      el.textContent = s;
      skillsList.appendChild(el);
    });

    // experiences
    const expEl = document.getElementById('experiences');
    expEl.innerHTML = '';
    (data.experiences || []).forEach(exp=>{
      const node = document.createElement('div');
      node.className = 'exp';
      node.innerHTML = `<div class="year">${exp.year} — <span class="role">${exp.role}</span></div>
                        <div class="desc">${exp.company} · ${exp.location}</div>
                        <div class="desc">${exp.summary}</div>`;
      expEl.appendChild(node);
    });

    // education
    const eduEl = document.getElementById('education');
    eduEl.innerHTML = '';
    (data.education || []).forEach(e=>{
      const li = document.createElement('li');
      li.textContent = `${e.year ? e.year + ' — ' : ''}${e.title} · ${e.institution}`;
      eduEl.appendChild(li);
    });

    // projects
    const projEl = document.getElementById('projects');
    projEl.innerHTML = '';
    (data.projects || []).forEach(p=>{
      const d = document.createElement('div');
      d.className = 'proj';
      d.innerHTML = `<strong>${p.title}</strong><div class="desc">${p.summary}</div>`;
      projEl.appendChild(d);
    });

  } catch (err) {
    console.error(err);
    document.body.insertAdjacentHTML('afterbegin', '<div style="background:#ffef; padding:8px;color:#000">Erreur de chargement du profil.</div>');
  }
}





const bubble = document.getElementById("music-bubble");
  const icon = document.getElementById("music-icon");
  const equalizer = document.getElementById("equalizer");
  const audio = document.getElementById("bg-music");

  let isPlaying = false;

  bubble.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play();
      icon.style.display = "none";
      equalizer.style.display = "flex";
      equalizer.querySelectorAll("span").forEach(bar => {
        bar.style.animationPlayState = "running";
      });
      isPlaying = true;
    } else {
      audio.pause();
      icon.style.display = "block";
      equalizer.style.display = "none";
      equalizer.querySelectorAll("span").forEach(bar => {
        bar.style.animationPlayState = "paused";
      });
      isPlaying = false;
    }

  });


"@context": "https://schema.org",
  "@type": "Person",
  "name": "Ruth Ngouolali",
  "jobTitle": "Coordinatrice logistique & supply chain",
  "url": "https://rutvie.fr/",
  "sameAs": [
    "https://www.linkedin.com/in/ruth-ngouolali-b8a1a8321",
    "mailto:teviengouolali@gmail.com"
  ]
