const elements = {
    sidebar: document.getElementById("sidebar"),
    sidebarBackdrop: document.getElementById("sidebarBackdrop"),
    sidebarOpen: document.getElementById("sidebarOpen"),
    sidebarClose: document.getElementById("sidebarClose"),
    newChatButton: document.getElementById("newChatButton"),
    chatSearch: document.getElementById("chatSearch"),
    emptyHistory: document.getElementById("emptyHistory"),
    profileAvatar: document.getElementById("profileAvatar"),
    profileName: document.getElementById("profileName"),
    chatHistory: document.getElementById("chatHistory"),
    profileEmail: document.getElementById("profileEmail"),
    logoutButton: document.getElementById("logoutButton"),
    chatTitle: document.getElementById("chatTitle"),
    saveStatus: document.getElementById("saveStatus"),
    deleteChatButton: document.getElementById("deleteChatButton"),
    chatViewport: document.getElementById("chatViewport"),
    messages: document.getElementById("messages"),
    globalError: document.getElementById("globalError"),
    chatForm: document.getElementById("chatForm"),
    messageInput: document.getElementById("messageInput"),
    charCount: document.getElementById("charCount"),
    sendButton: document.getElementById("sendButton"),
    emptyState: document.getElementById("emptyState"),
    modelSelect: document.getElementById("modelSelect"),
};

const state = {
    user: null,
    chats: [],
    models: [],
    currentChatId: null,
    sending: false
};

function showError(message) {
    elements.globalError.textContent = message;
    elements.globalError.classList.remove("hidden")
}

function cleanError(message) {
    elements.globalError.classList.add("hidden")
    elements.globalError.textContent = "";
}

function renderChats() {
    const query = elements.chatSearch.value.trim().toLowerCase();
    const visibleChats = state.chats.filter(chat => chat.title.toLowerCase().includes(query))

    elements.chatHistory.replaceChildren();
    elements.emptyHistory.classList.toggle("hidden", visibleChats.length > 0);

    visibleChats.forEach(chat => {
        const button = document.createElement("button");
        const active = chat.id === state.currentChatId;
        button.type = "button";
        button.className = active
            ? "flex w-full items-center gap-2 rounded-lg bg-white px-3 py-2.5 text-left font-medium text-ink shadow-sm"
            : "flex w-full items-center gap-2 rounded-lg bg-white px-3 py-2.5 text-left font-medium text-stone-600"
        button.dataset.chatId = chat.id;
    })
}