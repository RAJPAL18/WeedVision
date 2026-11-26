const API_BASE = window.location.origin;

const translations = {
    en: {
        navRealtime: "Real-time Detection",
        navAI: "AI Classification",
        navSpecies: "3 Species",
        moreAbout: "More About WeedVision",
        heroText: "AI-powered precision weed detection for modern farms. Protect your crops and reduce chemical use with real-time image analysis.",
        liveFeed: "LIVE FEED",
        startFeed: "Start Feed",
        captureDetect: "Capture & Detect",
        stop: "Stop",
        imageUpload: "IMAGE UPLOAD",
        analyzeImage: "Analyze Image",
        confidence: "DETECTION CONFIDENCE",
        analysisProgress: "AI ANALYSIS IN PROGRESS...",
        ready: "Ready",
        analysisResult: "ANALYSIS RESULT",
        processedHere: "Processed images will appear here.",
        results: "RESULTS",
        noDetections: "No detections yet.",
        weedInfo: "WEED INFO PANEL",
        clickBadge: "Click a badge to learn more.",
        history: "DETECTION HISTORY",
        aboutTitle: "About WeedVision",
        aboutText: "WeedVision is an AI-powered smart farming assistant that identifies weeds in crop images and helps farmers make faster, more targeted weed management decisions.",
        howTitle: "How It Works",
        step1Title: "1. Capture an Image",
        step1Text: "Use your camera or upload a clear image of crops and weeds.",
        step2Title: "2. AI Analysis",
        step2Text: "The YOLOv8 model scans the image and detects weed species with confidence scores.",
        step3Title: "3. Review Results",
        step3Text: "View the processed image, weed information, and recent detection history.",
        footerText: "Â© 2026 WeedVision | Smart Weed Detection for Modern Farms",
        noActivity: "No recent activity",
        found: "found",
        noDatabase: "No database entry for",
        learnMore: "Learn More",
        failedInfo: "Failed to load weed information.",
        cameraError: "Camera error",
        noWeedsDetected: "No weeds detected."
    },
    hi: {
        navRealtime: "à¤°à¤¿à¤¯à¤²-à¤Ÿà¤¾à¤‡à¤® à¤ªà¤¹à¤šà¤¾à¤¨",
        navAI: "à¤à¤†à¤ˆ à¤µà¤°à¥à¤—à¥€à¤•à¤°à¤£",
        navSpecies: "3 à¤ªà¥à¤°à¤œà¤¾à¤¤à¤¿à¤¯à¤¾à¤",
        moreAbout: "à¤µà¥€à¤¡à¤µà¤¿à¤œà¤¼à¤¨ à¤•à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚ à¤…à¤§à¤¿à¤•",
        heroText: "à¤†à¤§à¥à¤¨à¤¿à¤• à¤–à¥‡à¤¤à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤à¤†à¤ˆ-à¤¸à¤‚à¤šà¤¾à¤²à¤¿à¤¤ à¤¸à¤Ÿà¥€à¤• à¤–à¤°à¤ªà¤¤à¤µà¤¾à¤° à¤ªà¤¹à¤šà¤¾à¤¨à¥¤ à¤°à¤¿à¤¯à¤²-à¤Ÿà¤¾à¤‡à¤® à¤›à¤µà¤¿ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¸à¥‡ à¤«à¤¸à¤²à¥‹à¤‚ à¤•à¥€ à¤°à¤•à¥à¤·à¤¾ à¤•à¤°à¥‡à¤‚ à¤”à¤° à¤°à¤¸à¤¾à¤¯à¤¨à¥‹à¤‚ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤® à¤•à¤°à¥‡à¤‚à¥¤",
        liveFeed: "à¤²à¤¾à¤‡à¤µ à¤«à¤¼à¥€à¤¡",
        startFeed: "à¤«à¤¼à¥€à¤¡ à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‡à¤‚",
        captureDetect: "à¤•à¥ˆà¤ªà¥à¤šà¤° à¤”à¤° à¤ªà¤¹à¤šà¤¾à¤¨",
        stop: "à¤°à¥‹à¤•à¥‡à¤‚",
        imageUpload: "à¤›à¤µà¤¿ à¤…à¤ªà¤²à¥‹à¤¡",
        analyzeImage: "à¤›à¤µà¤¿ à¤•à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¥‡à¤‚",
        confidence: "à¤ªà¤¹à¤šà¤¾à¤¨ à¤µà¤¿à¤¶à¥à¤µà¤¾à¤¸",
        analysisProgress: "à¤à¤†à¤ˆ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤œà¤¾à¤°à¥€ à¤¹à¥ˆ...",
        ready: "à¤¤à¥ˆà¤¯à¤¾à¤°",
        analysisResult: "à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤ªà¤°à¤¿à¤£à¤¾à¤®",
        processedHere: "à¤¸à¤‚à¤¸à¤¾à¤§à¤¿à¤¤ à¤›à¤µà¤¿à¤¯à¤¾à¤‚ à¤¯à¤¹à¤¾à¤‚ à¤¦à¤¿à¤–à¤¾à¤ˆ à¤¦à¥‡à¤‚à¤—à¥€à¥¤",
        results: "à¤ªà¤°à¤¿à¤£à¤¾à¤®",
        noDetections: "à¤…à¤­à¥€ à¤•à¥‹à¤ˆ à¤ªà¤¹à¤šà¤¾à¤¨ à¤¨à¤¹à¥€à¤‚ à¤¹à¥à¤ˆà¥¤",
        weedInfo: "à¤–à¤°à¤ªà¤¤à¤µà¤¾à¤° à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€",
        clickBadge: "à¤…à¤§à¤¿à¤• à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤•à¥‡ à¤²à¤¿à¤ à¤¬à¥ˆà¤œ à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚à¥¤",
        history: "à¤ªà¤¹à¤šà¤¾à¤¨ à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸",
        aboutTitle: "à¤µà¥€à¤¡à¤µà¤¿à¤œà¤¼à¤¨ à¤•à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚",
        aboutText: "à¤µà¥€à¤¡à¤µà¤¿à¤œà¤¼à¤¨ à¤à¤• à¤à¤†à¤ˆ-à¤¸à¤‚à¤šà¤¾à¤²à¤¿à¤¤ à¤¸à¥à¤®à¤¾à¤°à¥à¤Ÿ à¤–à¥‡à¤¤à¥€ à¤¸à¤¹à¤¾à¤¯à¤• à¤¹à¥ˆ à¤œà¥‹ à¤«à¤¸à¤² à¤•à¥€ à¤›à¤µà¤¿à¤¯à¥‹à¤‚ à¤®à¥‡à¤‚ à¤–à¤°à¤ªà¤¤à¤µà¤¾à¤° à¤ªà¤¹à¤šà¤¾à¤¨à¤¤à¤¾ à¤¹à¥ˆ à¤”à¤° à¤•à¤¿à¤¸à¤¾à¤¨à¥‹à¤‚ à¤•à¥‹ à¤¤à¥‡à¤œà¤¼ à¤µ à¤…à¤§à¤¿à¤• à¤²à¤•à¥à¤·à¤¿à¤¤ à¤–à¤°à¤ªà¤¤à¤µà¤¾à¤° à¤ªà¥à¤°à¤¬à¤‚à¤§à¤¨ à¤¨à¤¿à¤°à¥à¤£à¤¯ à¤²à¥‡à¤¨à¥‡ à¤®à¥‡à¤‚ à¤®à¤¦à¤¦ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤",
        howTitle: "à¤¯à¤¹ à¤•à¥ˆà¤¸à¥‡ à¤•à¤¾à¤® à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ",
        step1Title: "1. à¤›à¤µà¤¿ à¤•à¥ˆà¤ªà¥à¤šà¤° à¤•à¤°à¥‡à¤‚",
        step1Text: "à¤…à¤ªà¤¨à¥‡ à¤•à¥ˆà¤®à¤°à¥‡ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚ à¤¯à¤¾ à¤«à¤¸à¤² à¤”à¤° à¤–à¤°à¤ªà¤¤à¤µà¤¾à¤° à¤•à¥€ à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤›à¤µà¤¿ à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚à¥¤",
        step2Title: "2. à¤à¤†à¤ˆ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£",
        step2Text: "YOLOv8 à¤®à¥‰à¤¡à¤² à¤›à¤µà¤¿ à¤•à¥‹ à¤¸à¥à¤•à¥ˆà¤¨ à¤•à¤°à¤•à¥‡ à¤µà¤¿à¤¶à¥à¤µà¤¾à¤¸ à¤¸à¥à¤•à¥‹à¤° à¤•à¥‡ à¤¸à¤¾à¤¥ à¤–à¤°à¤ªà¤¤à¤µà¤¾à¤° à¤ªà¥à¤°à¤œà¤¾à¤¤à¤¿à¤¯à¥‹à¤‚ à¤•à¥€ à¤ªà¤¹à¤šà¤¾à¤¨ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤",
        step3Title: "3. à¤ªà¤°à¤¿à¤£à¤¾à¤® à¤¦à¥‡à¤–à¥‡à¤‚",
        step3Text: "à¤¸à¤‚à¤¸à¤¾à¤§à¤¿à¤¤ à¤›à¤µà¤¿, à¤–à¤°à¤ªà¤¤à¤µà¤¾à¤° à¤•à¥€ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤”à¤° à¤¹à¤¾à¤² à¤•à¥€ à¤ªà¤¹à¤šà¤¾à¤¨ à¤•à¤¾ à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤¦à¥‡à¤–à¥‡à¤‚à¥¤",
        footerText: "Â© 2026 à¤µà¥€à¤¡à¤µà¤¿à¤œà¤¼à¤¨ | à¤†à¤§à¥à¤¨à¤¿à¤• à¤–à¥‡à¤¤à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¥à¤®à¤¾à¤°à¥à¤Ÿ à¤–à¤°à¤ªà¤¤à¤µà¤¾à¤° à¤ªà¤¹à¤šà¤¾à¤¨",
        noActivity: "à¤¹à¤¾à¤² à¤•à¥€ à¤•à¥‹à¤ˆ à¤—à¤¤à¤¿à¤µà¤¿à¤§à¤¿ à¤¨à¤¹à¥€à¤‚",
        found: "à¤®à¤¿à¤²à¥‡",
        noDatabase: "à¤‡à¤¸à¤²à¤¿à¤ à¤•à¥‹à¤ˆ à¤¡à¥‡à¤Ÿà¤¾à¤¬à¥‡à¤¸ à¤ªà¥à¤°à¤µà¤¿à¤·à¥à¤Ÿà¤¿ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆ",
        learnMore: "à¤”à¤° à¤œà¤¾à¤¨à¥‡à¤‚",
        failedInfo: "à¤–à¤°à¤ªà¤¤à¤µà¤¾à¤° à¤•à¥€ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤²à¥‹à¤¡ à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹ à¤¸à¤•à¥€à¥¤",
        cameraError: "à¤•à¥ˆà¤®à¤°à¤¾ à¤¤à¥à¤°à¥à¤Ÿà¤¿",
        noWeedsDetected: "à¤•à¥‹à¤ˆ à¤–à¤°à¤ªà¤¤à¤µà¤¾à¤° à¤¨à¤¹à¥€à¤‚ à¤®à¤¿à¤²à¤¾à¥¤"
    }
};

let currentLanguage = localStorage.getItem("weedvision-language") === "hi" ? "hi" : "en";
let lastWeedName = null;
let lastDetections = [];

function applyLanguage(language) {
    currentLanguage = language;
    localStorage.setItem("weedvision-language", language);
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    const toggle = document.getElementById("language-toggle");
    toggle.textContent = language === "en" ? "à¤¹à¤¿à¤‚à¤¦à¥€" : "English";
    toggle.setAttribute("aria-label", language === "en" ? "Switch to Hindi" : "à¤…à¤‚à¤—à¥à¤°à¥‡à¤œà¤¼à¥€ à¤®à¥‡à¤‚ à¤¬à¤¦à¤²à¥‡à¤‚");

    if (lastWeedName) fetchWeedDetails(lastWeedName);
    if (lastDetections.length) renderResults(lastDetections);
    updateHistory();
}

// UI Selectors
const liveVideo = document.getElementById("live-video");
const startCamBtn = document.getElementById("start-camera-btn");
const stopCamBtn = document.getElementById("stop-camera-btn");
const captureBtn = document.getElementById("capture-frame-btn");
const resultImg = document.getElementById("result-image");
const placeholder = document.getElementById("placeholder-text");
const loader = document.getElementById("ai-loader");

let cameraStream = null;

// 1. Camera Logic
startCamBtn.onclick = async () => {
    try {
        cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        liveVideo.srcObject = cameraStream;
        startCamBtn.classList.add("d-none");
        stopCamBtn.classList.remove("d-none");
        captureBtn.disabled = false;
    } catch (err) { alert(translations[currentLanguage].cameraError + ": " + err.message); }
};

stopCamBtn.onclick = () => {
    if (cameraStream) cameraStream.getTracks().forEach(t => t.stop());
    liveVideo.srcObject = null;
    startCamBtn.classList.remove("d-none");
    stopCamBtn.classList.add("d-none");
};

// --- NEW FUNCTIONAL ADDITIONS ---

async function fetchWeedDetails(name) {
    const infoPanel = document.getElementById("weed-info-panel");
    lastWeedName = name;

    try {
        const res = await fetch(`${API_BASE}/api/weeds`);
        const data = await res.json();

        // Improved Search: Checks if the detected name is inside the common OR scientific name
        const weed = data.weeds.find(w =>
            name.toLowerCase().trim() === w.scientific_name.toLowerCase().trim() ||
            name.toLowerCase().trim() === w.common_name.toLowerCase().trim() ||
            w.scientific_name.toLowerCase().includes(name.toLowerCase().trim())
        );

        if (weed) {
            infoPanel.innerHTML = `
                <div class="p-2">
                    <h6 class="fw-bold text-success mb-1">${weed.common_name}</h6>
                    <p class="text-muted small mb-2"><i>${weed.scientific_name}</i></p>
                    <p class="mb-3" style="font-size: 0.85rem;">${weed.description}</p>
                    <a href="${weed.external_link}" target="_blank" class="btn btn-sm btn-success w-100">
                        <i class="bi bi-box-arrow-up-right me-1"></i> ${translations[currentLanguage].learnMore}
                    </a>
                </div>`;
        } else {
            infoPanel.innerHTML = `<div class="p-2 text-muted small">${translations[currentLanguage].noDatabase} "${name}".</div>`;
        }
    } catch (err) {
        console.error("Info Panel Error:", err);
        infoPanel.innerHTML = translations[currentLanguage].failedInfo;
    }
}
// --- ADD THIS HERE ---
// --- PASTE THIS RIGHT AFTER fetchWeedDetails ---

async function updateHistory() {
    const historyList = document.getElementById("history-list");
    if (!historyList) return;

    try {
        const res = await fetch(`${API_BASE}/api/detections/recent`);
        const data = await res.json();

        if (data.history && data.history.length > 0) {
            historyList.innerHTML = data.history.map(h => `
                <div class="list-group-item border-0 border-bottom py-2 bg-transparent history-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="fw-bold text-success" style="font-size: 0.85rem;">
                            <i class="bi bi-flower1 me-1"></i>${h.main_weeds}
                        </span>
                        <span class="badge bg-light text-dark border" style="font-size: 0.7rem;">
                            ${h.total_detections} ${translations[currentLanguage].found}
                        </span>
                    </div>
                    <div class="text-muted" style="font-size: 0.7rem;">
                        <i class="bi bi-clock me-1"></i>${h.timestamp}
                    </div>
                </div>
            `).join('');
        } else {
            historyList.innerHTML = `<div class="p-3 text-center text-muted small">${translations[currentLanguage].noActivity}</div>`;
        }
    } catch (err) {
        console.error("History Error:", err);
    }
}
// 2. AI Processing
async function analyzeMedia(blob) {
    if (loader) loader.classList.replace("d-none", "d-flex");
    const formData = new FormData();
    formData.append("file", blob, "upload.jpg");

    try {
        const res = await fetch(`${API_BASE}/process`, { method: "POST", body: formData });
        const data = await res.json();

        if (data.status === "success") {
            resultImg.src = `${API_BASE}${data.processed_url}?t=${Date.now()}`;
            resultImg.classList.remove("d-none");
            if (placeholder) placeholder.classList.add("d-none");

            if (data.detections && data.detections.length > 0) {
                const top = data.detections[0];
                updateGauge(top.confidence, top.name);
                fetchWeedDetails(top.name);
            }
            renderResults(data.detections);
            updateHistory();
        }
    } catch (err) {
        console.error("Analysis Error:", err);
    } finally {
        if (loader) loader.classList.replace("d-flex", "d-none");
    }
}

function updateGauge(score, label) {
    const val = Math.round(score * 100);
    const gVal = document.getElementById("gauge-value");
    const gLab = document.getElementById("gauge-label");
    const gProg = document.getElementById("gauge-progress");
    if(gVal) gVal.innerText = val + "%";
    if(gLab) gLab.innerText = label;
    // Animates the green confidence ring
    if(gProg) gProg.style.strokeDashoffset = 251.2 - (val / 100) * 251.2;
}

function renderResults(dets) {
    const div = document.getElementById("conf-scores");
    if (!div) return;
    lastDetections = dets;
    // Creates clickable badges that open weed info
    div.innerHTML = dets.map(d => `
        <button class="btn btn-outline-success btn-sm me-2 mb-2" onclick="fetchWeedDetails('${d.name}')">
            <i class="bi bi-flower1"></i> ${d.name} ${(d.confidence*100).toFixed(0)}%
        </button>`).join('') || translations[currentLanguage].noWeedsDetected;
}

// Button Triggers
captureBtn.onclick = () => {
    const canvas = document.getElementById("capture-canvas");
    if (!canvas) return;
    canvas.width = liveVideo.videoWidth;
    canvas.height = liveVideo.videoHeight;
    canvas.getContext("2d").drawImage(liveVideo, 0, 0);
    canvas.toBlob(blob => analyzeMedia(blob), "image/jpeg");
};

document.getElementById("image-detect-btn").onclick = () => {
    const input = document.getElementById("image-input");
    if (input.files[0]) analyzeMedia(input.files[0]);
};
// Load history when the page first opens
document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLanguage);
    updateHistory();
});

document.getElementById("language-toggle").addEventListener("click", () => {
    applyLanguage(currentLanguage === "en" ? "hi" : "en");
});
