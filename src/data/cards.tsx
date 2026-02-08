import type { CardData } from '../types';
import { 
  ForeplayIllustration, 
  MissionaryIllustration, 
  DoggyIllustration, 
  CowgirlIllustration, 
  InteractionIllustration,
  KnowledgeIllustration,
  LotusIllustration,
  FlameIllustration,
  FeatherIllustration,
  MoonIllustration,
  KnotIllustration,
  SpoonIllustration,
  ReverseCowgirlIllustration,
  ButterflyIllustration,
  StandingOIllustration,
  PretzelIllustration,
  SixtyNineIllustration,
  HuggingIllustration,
  HandsIllustration,
  BridgeIllustration,
  ChairIllustration,
  TShapeIllustration,
  MusicIllustration,
  CandleIllustration
} from '../components/illustrations/Illustrations';

export const cards: CardData[] = [
  // Knowledge Cards
  {
    id: 'k1',
    title: '安全第一',
    type: 'knowledge',
    description: '了解避孕与安全措施是享受的前提。',
    content: '在开始之前，确保双方都了解并同意使用的避孕方式（如安全套、短效避孕药等）。检查安全套的有效期和完整性。',
    illustration: <KnowledgeIllustration />
  },
  {
    id: 'k2',
    title: '清洁准备',
    type: 'knowledge',
    description: '良好的卫生习惯能提升体验。',
    content: '简单的淋浴不仅能保持清洁，温水还能放松肌肉。注意私密部位的清洁，但避免使用刺激性强的洗液。',
    illustration: <KnowledgeIllustration />
  },
  {
    id: 'k3',
    title: '润滑的艺术',
    type: 'knowledge',
    description: '减少摩擦，增加愉悦感。',
    content: '永远不要低估润滑液的作用。即使身体有自然分泌，额外的润滑也能减少微小损伤，增加顺滑感。水基润滑液最通用，硅基更持久但不兼容硅胶玩具。',
    illustration: <KnowledgeIllustration />
  },
  {
    id: 'k4',
    title: '安全词',
    type: 'knowledge',
    description: '建立绝对的信任与边界。',
    content: '约定一个“安全词”（如“红灯”或“香蕉”）。无论在进行什么活动，一旦说出这个词，必须立即停止。这能让双方在探索边界时更有安全感。',
    illustration: <KnowledgeIllustration />
  },

  // Foreplay Cards
  {
    id: 'f1',
    title: '指尖漫游',
    type: 'foreplay',
    description: '用指尖探索对方的身体地图。',
    content: '不要急于接触敏感部位。尝试用指腹轻轻划过背部、手臂内侧、耳后和颈部。感受对方的颤栗和呼吸变化。',
    illustration: <ForeplayIllustration />
  },
  {
    id: 'f2',
    title: '深情对视',
    type: 'foreplay',
    description: '眼神交流是灵魂的触碰。',
    content: '保持30秒的沉默，仅用眼神交流。这能极大地拉近心理距离，营造亲密的氛围。',
    illustration: <MoonIllustration />
  },
  {
    id: 'f3',
    title: '轻羽抚触',
    type: 'foreplay',
    description: '如羽毛般轻柔的触感。',
    content: '使用羽毛、丝巾或仅仅是头发梢，轻轻拂过对方的敏感区域（大腿内侧、胸口、腹部）。这种若有若无的触感会极大地放大感官体验。',
    illustration: <FeatherIllustration />
  },
  {
    id: 'f4',
    title: '耳畔低语',
    type: 'foreplay',
    description: '声音是另一种催情剂。',
    content: '贴近对方的耳朵，用极低的声音说出你的感受，或者接下来想做的事情。温热的气息打在耳廓上，会引起强烈的生理反应。',
    illustration: <MoonIllustration />
  },

  // Position Cards
  {
    id: 'p1',
    title: '传教士式',
    type: 'position',
    description: '最经典、最亲密的姿势。',
    content: '一方平躺，另一方在上方。优点是双方可以面对面，方便眼神交流和接吻。',
    tips: '如果在下的一方腰部不适，可以在臀部下方垫一个枕头。',
    difficulty: 1,
    illustration: <MissionaryIllustration />
  },
  {
    id: 'p2',
    title: '后入式',
    type: 'position',
    description: '深入的体验，充满征服感。',
    content: '一方跪趴，另一方从后方进入。这个姿势通常能提供较深的刺激。',
    tips: '控制节奏和深度，注意观察对方反应，避免不适。',
    difficulty: 2,
    illustration: <DoggyIllustration />
  },
  {
    id: 'p3',
    title: '女上位',
    type: 'position',
    description: '由女性掌控节奏和深度。',
    content: '男性平躺，女性跨坐在上方。女性可以完全控制深度、角度和速度。',
    tips: '这对于男性持久力有帮助，同时也让女性更容易找到舒适的角度。',
    difficulty: 3,
    illustration: <CowgirlIllustration />
  },
  {
    id: 'p4',
    title: '侧卧勺子式',
    type: 'position',
    description: '温柔且省力的姿势，适合长时间温存。',
    content: '双方侧躺，背靠胸膛，像两把勺子叠在一起。从后方进入。这是一个非常亲密且放松的姿势。',
    tips: '可以用手爱抚对方的前胸，增加亲密感。',
    difficulty: 1,
    illustration: <SpoonIllustration />
  },
  {
    id: 'p5',
    title: '面对面坐姿',
    type: 'position',
    description: '深度结合，正如莲花盛开。',
    content: '一方盘腿坐下，另一方跨坐在其腿上，面对面拥抱结合。这个姿势允许最深情的拥抱和接吻。',
    tips: '需要一定的柔韧性。被抱起的一方可以用腿勾住对方的腰。',
    difficulty: 2,
    illustration: <LotusIllustration />
  },
  {
    id: 'p6',
    title: '站立后入',
    type: 'position',
    description: '随时随地的激情释放。',
    content: '一方扶墙或桌沿站立，上半身前倾，另一方从后方站立进入。适合快速、充满激情的时刻。',
    tips: '注意身高差，可以用垫脚或屈膝来调整高度。',
    difficulty: 4,
    illustration: <FlameIllustration />
  },
  {
    id: 'p7',
    title: '边缘试探',
    type: 'position',
    description: '利用床沿的高度差。',
    content: '一方平躺在床边，臀部正好在床沿，双腿打开或抬起。另一方站立在床边进入。这能提供非常不同的角度和深度。',
    tips: '注意床的高度是否合适，站立方需要保持平衡。',
    difficulty: 3,
    illustration: <FlameIllustration />
  },
  {
    id: 'p8',
    title: '反向女上位',
    type: 'position',
    description: '背对背的骑乘，独特的视觉享受。',
    content: '男性平躺，女性背对男性跨坐在上方。这给了女性完全的控制权，同时男性可以欣赏背部曲线。',
    tips: '注意保持平衡，开始时可以放慢速度，避免阴茎滑出折伤。',
    difficulty: 3,
    illustration: <ReverseCowgirlIllustration />
  },
  {
    id: 'p9',
    title: '蝴蝶式',
    type: 'position',
    description: '腿部抬高，更深的结合。',
    content: '女性平躺在床边或桌边，双腿高高抬起放在男性肩膀上。男性站立或跪姿进入。这个角度能让骨盆完全打开，允许极深的进入。',
    tips: '这是一个非常亲密的姿势，适合眼神交流。',
    difficulty: 2,
    illustration: <ButterflyIllustration />
  },
  {
    id: 'p10',
    title: '单腿站立',
    type: 'position',
    description: '激情时刻的经典选择。',
    content: '双方站立，女性抬起一条腿勾住男性的腰部。男性托住女性的大腿进行动作。适合在任何直立的场景中尝试。',
    tips: '如果保持平衡困难，可以让女性背靠墙壁。',
    difficulty: 4,
    illustration: <StandingOIllustration />
  },
  {
    id: 'p11',
    title: '缠绕式',
    type: 'position',
    description: '紧密纠缠，侧卧的激情变体。',
    content: '双方侧卧面对面，一条腿相互交织。这种姿势下，身体接触面积最大化，非常适合喜欢紧密拥抱的情侣。',
    tips: '可以配合手部爱抚背部和臀部。',
    difficulty: 2,
    illustration: <PretzelIllustration />
  },

  // Interaction Cards
  {
    id: 'i1',
    title: '真心话骰子',
    type: 'interaction',
    description: '通过问答增进了解。',
    content: '轮流问对方一个关于性偏好的问题（如“你最喜欢的被触摸的部位是哪里？”）。必须诚实回答。',
    illustration: <InteractionIllustration />
  },
  {
    id: 'i2',
    title: '感官剥夺',
    type: 'interaction',
    description: '关闭一种感官，放大其他感受。',
    content: '使用眼罩或丝巾蒙住一方的眼睛。在视觉被剥夺的情况下，触觉和听觉会变得异常敏锐。',
    illustration: <InteractionIllustration />
  },
  {
    id: 'i3',
    title: '角色扮演',
    type: 'interaction',
    description: '换个身份，体验不同的人生。',
    content: '设定一个简单的场景（如医生/病人，按摩师/顾客）。在接下来的20分钟内，双方必须完全沉浸在角色中，用角色的语气对话。',
    illustration: <KnotIllustration />
  },
  {
    id: 'i4',
    title: '温度游戏',
    type: 'interaction',
    description: '冰与火的刺激体验。',
    content: '准备一杯冰水和一杯温热水。交替含一口不同温度的水，然后在对方敏感部位（如脖子、耳后）亲吻或吹气。',
    illustration: <FlameIllustration />
  },
  {
    id: 'i5',
    title: '完全臣服',
    type: 'interaction',
    description: '将控制权完全交给对方。',
    content: '设定闹钟，15分钟。在此期间，一方只能躺着不动，不能说话，不能主动动作，完全接受另一方的任何抚摸和挑逗（不包括插入）。',
    illustration: <KnotIllustration />
  },
  {
    id: 'i6',
    title: '互悦式 (69)',
    type: 'interaction',
    description: '经典的互相取悦姿势。',
    content: '双方头尾相对，同时为对方进行口部刺激。可以侧卧（更轻松）或上下叠放（更刺激）。',
    tips: '注意保持卫生，不要强迫自己深入喉咙。侧卧位可以避免颈部酸痛。',
    illustration: <SixtyNineIllustration />
  },
  {
    id: 'k5',
    title: '温存时光',
    type: 'knowledge',
    description: '结束后的拥抱比过程更重要。',
    content: '在高潮过后，身体会分泌催产素。此时的拥抱、亲吻和交流能极大地增强情感连接。不要立刻入睡或分开，花至少10分钟时间互相依偎。',
    illustration: <HuggingIllustration />
  },
  {
    id: 'k6',
    title: '知情同意',
    type: 'knowledge',
    description: '积极的同意是性感的开始。',
    content: '同意不是一次性的，而是持续的。学会阅读非语言信号：对方的呼吸、身体紧张度。如果不确定，停下来问一句“这样感觉好吗？”。',
    illustration: <HandsIllustration />
  },
  {
    id: 'k7',
    title: '盆底肌健康',
    type: 'knowledge',
    description: '核心肌肉群的锻炼。',
    content: '无论男女，凯格尔运动（Kegel）都能增强盆底肌力量，提升控制力和愉悦感。尝试收缩尿道括约肌，保持3-5秒后放松，重复练习。',
    illustration: <LotusIllustration />
  },

  // New Foreplay Cards
  {
    id: 'f5',
    title: '舒缓按摩',
    type: 'foreplay',
    description: '用掌心的温度唤醒身体。',
    content: '准备好按摩油。从肩膀开始，顺着脊柱向下推拿。不要急于触碰敏感点，先让全身肌肉放松下来。重点按摩大腿内侧和腰部。',
    illustration: <HandsIllustration />
  },
  {
    id: 'f6',
    title: '味觉探索',
    type: 'foreplay',
    description: '甜蜜的感官游戏。',
    content: '准备一些巧克力、水果或奶油。蒙住对方眼睛，将食物涂抹在身体不同部位，然后用嘴唇和舌头去品尝和清理。',
    illustration: <SpoonIllustration />
  },
  {
    id: 'f7',
    title: '呼吸同步',
    type: 'foreplay',
    description: '能量的共振与连接。',
    content: '面对面坐着或躺着，将手放在对方心脏位置。尝试调整呼吸节奏，直到两人的呼吸完全同步。这是一种深层的能量交换。',
    illustration: <HuggingIllustration />
  },

  // New Position Cards
  {
    id: 'p12',
    title: '拱桥式',
    type: 'position',
    description: '核心发力，更深的角度。',
    content: '女性平躺，双脚踩床，臀部抬起形成拱桥状。男性跪姿或站立进入。这个角度能刺激到平时难以触及的区域。',
    difficulty: 3,
    illustration: <BridgeIllustration />
  },
  {
    id: 'p13',
    title: '坐姿爱抚',
    type: 'position',
    description: '面对面的深度交流。',
    content: '男性坐在椅子或床边，女性跨坐在男性腿上，面对面。女性双腿缠绕男性腰部。这个姿势非常省力，且适合长时间接吻。',
    difficulty: 1,
    illustration: <ChairIllustration />
  },
  {
    id: 'p14',
    title: 'T字形',
    type: 'position',
    description: '垂直角度的独特体验。',
    content: '女性平躺，男性侧躺，两人身体呈T字形（90度）。男性将一条腿搭在女性身上。这个姿势适合缓慢、温柔的节奏。',
    difficulty: 2,
    illustration: <TShapeIllustration />
  },

  // New Interaction Cards
  {
    id: 'i7',
    title: '镜面模仿',
    type: 'interaction',
    description: '你是我的镜子。',
    content: '面对面坐着。一方做动作（抚摸自己、表情变化），另一方必须像镜子一样完全同步模仿。5分钟后交换角色。',
    illustration: <MoonIllustration />
  },
  {
    id: 'i8',
    title: '禁手挑战',
    type: 'interaction',
    description: '探索除双手以外的接触。',
    content: '在接下来的10分钟前戏中，双方都不能使用双手。尝试用嘴唇、头发、胸部或大腿去触碰和挑逗对方。',
    illustration: <KnotIllustration />
  },

  // Tip Cards
  {
    id: 't1',
    title: '氛围音乐',
    type: 'tip',
    description: '听觉是情绪的催化剂。',
    content: '提前准备一份歌单。推荐爵士、R&B或Lo-Fi风格。节奏缓慢、低音丰富的音乐能有效调节心跳，让身体更放松。',
    illustration: <MusicIllustration />
  },
  {
    id: 't2',
    title: '灯光艺术',
    type: 'tip',
    description: '朦胧美是最好的滤镜。',
    content: '避免明亮的顶灯。使用暖色调的台灯、落地灯，或者点燃几支香氛蜡烛。摇曳的烛光能让皮肤看起来更细腻，氛围更暧昧。',
    illustration: <CandleIllustration />
  }
];
