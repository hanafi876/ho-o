// === STORY DATA - Dark Fantasy Quest ===
// Format: { id, background, characterImage, characterName, dialogue, choices[] }

const scenes = [
  {
    id: "scene_01",
    background: "https://picsum.photos/1920/1080?random=1",
    characterImage: "https://picsum.photos/400/500?random=10",
    characterName: "Raka Sang Penyihir",
    dialogue: "Kau akhirnya datang ke Guha Kegelapan. Aku sudah menunggumu... tapi pertanyaannya, apakah kau datang sebagai kawan atau musuh? Pilih jalurmu dengan bijak, petualang.",
    choices: [
      { 
        text: "⚔️ Aku di sini untuk melawanmu! Tunjukkan kekuatanmu!", 
        nextSceneId: "scene_02a",
        effect: "combat"
      },
      { 
        text: "💬 Aku ingin bicara dulu. Mungkin ada cara damai?", 
        nextSceneId: "scene_02b",
        effect: "diplomacy"
      },
      { 
        text: "🏃 Mundur perlahan... Ini terlalu berbahaya!", 
        nextSceneId: "scene_02c",
        effect: "escape"
      }
    ]
  },
  {
    id: "scene_02a",
    background: "https://picsum.photos/1920/1080?random=2",
    characterImage: "https://picsum.photos/400/500?random=11",
    characterName: "Raka Sang Penyihir",
    dialogue: "Beraninya kau menantangku! Pedangmu akan patah sebelum menyentuhku. Siapkah kau menghadapi kutukan kegelapan abadi?",
    choices: [
      { 
        text: "⚔️ Serang dengan Pedang Suci!", 
        nextSceneId: "scene_03a_win",
        effect: "victory"
      },
      { 
        text: "🛡️ Pertahankan diri dan cari celah!", 
        nextSceneId: "scene_03a_defend",
        effect: "defend"
      }
    ]
  },
  {
    id: "scene_02b",
    background: "https://picsum.photos/1920/1080?random=3",
    characterImage: "https://picsum.photos/400/500?random=12",
    characterName: "Raka Sang Penyihir",
    dialogue: "Bicara? Hah! Jarang ada yang berani mendekatiku tanpa pedang. Baiklah, katakan apa yang kau inginkan. Tapi ingat, kata-katamu bisa menjadi senjata atau racun.",
    choices: [
      { 
        text: "💎 Tawarkan Permenah Kuno", 
        nextSceneId: "scene_03b_good",
        effect: "gift"
      },
      { 
        text: "📜 Tunjukkan Surat Raja", 
        nextSceneId: "scene_03b_king",
        effect: "authority"
      },
      { 
        text: "🤫 Bohong tentang misiku", 
        nextSceneId: "scene_03b_lie",
        effect: "deception"
      }
    ]
  },
  {
    id: "scene_02c",
    background: "https://picsum.photos/1920