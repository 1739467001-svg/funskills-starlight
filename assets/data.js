// 繁星之夜 · FunSkills 决赛入围作品数据
// 字段：slug 图片名 / title 中文名 / en 英文或副标题 / author 选手(可空) / track 赛道 / tagline 一句话 / blurb 简介 / tags
window.TRACKS = {
  "电商出海": { key: "ecom",    color: "#5fd0ff", glow: "rgba(95,208,255,.55)",  desc: "Commerce · 把生意搬进 AI" },
  "金融投资": { key: "finance", color: "#f5c44e", glow: "rgba(245,196,78,.55)",  desc: "Finance · 让决策有据可循" },
  "效率工具": { key: "tool",    color: "#a98bff", glow: "rgba(169,139,255,.55)", desc: "Productivity · 一人即团队" },
  "内容创作": { key: "content", color: "#ff8fb0", glow: "rgba(255,143,176,.55)", desc: "Creation · 灵感即刻成型" },
  "生活成长": { key: "life",    color: "#6fe0b0", glow: "rgba(111,224,176,.55)", desc: "Life · 照见更好的自己" }
};

window.WORKS = [
  { slug:"ecom-video", title:"电商视频全能版", en:"AIGC 重塑视频生产", author:"Cartman", wechat:"cartman-ca", track:"电商出海",
    tagline:"把视频流水线装进桌面", tags:["电商","短视频","AIGC"],
    blurb:"45 分钟完成传统 7 小时的视频生产，降本 70%+，工业级品质输出。从脚本到成片，把整条短视频流水线装进你的桌面。" },

  { slug:"cross-border", title:"跨境选品智能分析", en:"亚马逊 / FBA 智能选品决策助手", author:"GEB", wechat:"tobeGEB", track:"电商出海",
    tagline:"让选品从经验判断升级为模型化决策", tags:["跨境","选品","数据"],
    blurb:"十维度评估、目标利润反推、反内卷策略、合规与侵权风险提示——不是简单找爆品，而是找到更适合你的可持续产品机会。" },

  { slug:"meme-director", title:"电商梗片导演", en:"商品信息 → 一键生成短视频梗片方案", author:"静 sir", wechat:"jjbudy84", track:"电商出海",
    tagline:"从商品信息到爆款梗片，只需三分钟", tags:["短视频","创作","电商"],
    blurb:"输入商品与目标人群，一键产出脚本、分镜、关键帧、视频 Prompt 与风险检查的五大模块完整方案。" },

  { slug:"geo-checker", title:"GEO Checker", en:"Is your store AI-ready?", author:"张舒", track:"电商出海",
    tagline:"测一测你的店铺，AI 搜索引擎看得见吗", wechat:"zhangshubot", tags:["出海","GEO","可见性"],
    blurb:"扫描电商站点给出 GEO 分数，告诉你 ChatGPT、Perplexity 等 AI 搜索引擎看不见的结构化数据与可见性问题。" },

  { slug:"ecom-ops", title:"中国电商全链路运营系统", en:"12 大模块 · 覆盖全场景 · 数据驱动增长", author:"VON", wechat:"W18337862102", track:"电商出海",
    tagline:"一套系统打通电商运营全链路", tags:["电商","运营","系统"],
    blurb:"从标题优化、商品文案、评价管理到广告策略、供应链、合规法务，十二大核心模块覆盖电商运营全场景。" },

  { slug:"ecom-arcade", title:"电商超级智能体", en:"一键开局 · 选品/视觉/上架/复盘", author:"小智", track:"电商出海",
    tagline:"输入一个商品名，自动生成完整经营包", wechat:"KING_KAZMAX", tags:["电商","智能体","自动化"],
    blurb:"只需输入商品名或链接，自动生成主图、详情、短视频、上架字段与行动清单，一次完成整局开盘。" },

  { slug:"product-radar", title:"新奇特选品雷达", en:"用公开信号，筛出值得首测的跨境商品", author:"Owen", track:"电商出海",
    tagline:"TikTok Shop 跨境卖家的首发雷达", wechat:"ybelieveycanachieve", tags:["跨境","选品","TikTok"],
    blurb:"公开趋势聚合、机会评分、时效性判断、证据链核查与风险提示，帮你抢在风口前锁定值得首测的商品。" },

  { slug:"mengli-stock", title:"萌立 AI", en:"一句话生成个股分析", author:"明立", wechat:"ll-mingli1221", track:"金融投资",
    tagline:"一句话，写出一份个股分析", tags:["股票","分析","金融"],
    blurb:"一句话即可生成覆盖基本面、消息面、技术面的完整个股分析报告，把研究门槛降到一句话。" },

  { slug:"madclaw", title:"MadClaw 智能选股", en:"助力新手小白稳健投资", author:"桑先进", track:"金融投资",
    tagline:"数据驱动决策，让投资更简单", wechat:"ClawGeek", tags:["量化","选股","开源"],
    blurb:"基于 Python 的开源量化投研框架：100+ 因子库、30+ 策略模型、策略回测与风险规避，从 0 到 1 开启量化投资。" },

  { slug:"stock-master", title:"股票策场大师", en:"一个会自己交易的 AI", author:"许恒", wechat:"HENGX16", track:"金融投资",
    tagline:"不是回测，是真实排名", tags:["股票","交易"],
    blurb:"策场排名 #1、1.8 万+ 真实用户、500 万+ 管理资产：情绪分析、股票筛选、持仓诊断，给你一份持仓健康体检。" },

  { slug:"huanzhi-fa", title:"焕智 AI · FA Skill Pro", en:"创业者的融资副驾驶", author:"焕智 AI", track:"金融投资",
    tagline:"融资不是碰运气，而是系统化能力", wechat:"wx130910800", tags:["创业","融资"],
    blurb:"下载用户突破 1000+：融资诊断、提升 Capital EQ、融资策略、投资人匹配，加速每一位创始人的融资进程。" },

  { slug:"cbed", title:"CBED 可转债量化优选", en:"Convertible Bond Evaluation & Discovery", author:"王印国", wechat:"wangyinguoweixin", track:"金融投资",
    tagline:"把量化能力交给每一位投资者", tags:["可转债","量化"],
    blurb:"多维度筛选与实时监测可转债，可转债智能优选技能，让稳健的量化策略走进普通投资者的工具箱。" },

  { slug:"caibao", title:"财报智读", en:"让普通投资者也能读懂财报", author:"张庙", wechat:"Zmyyds88888", track:"金融投资",
    tagline:"看懂公司、看懂风险、看懂自己", tags:["投研","教育","风险"],
    blurb:"AI 投研 + 风险画像 + 同业 PK：识别风险、控制仓位、建立学习路径，是 AI 投资教育与研究的闭环平台。" },

  { slug:"web3quant", title:"Web3QuantMaster", en:"一人即宇宙 · AI 原生量化基础设施", author:"Freya", wechat:"GoArrower", track:"金融投资",
    tagline:"This is not a project. This is an asset.", tags:["量化","Web3"],
    blurb:"单人 OPC：40+ 生产级模块、5-10x 引擎提速、0ms DataStore、五级实时风控，面向高波动市场的量化 AI 助手。",
    qr:"assets/qr/web3quant.png", qrTitle:"群聊：【智量奇点】AICQ Lab", qrNote:"扫码加入社群交流 · 二维码 6 月 9 日前有效" },

  { slug:"finance-arena", title:"金融 AI 擂台", en:"智能算法对决 · 金融未来挑战", author:"于鸿伟", wechat:"ladefr12345", track:"金融投资",
    tagline:"让算法在擂台上一较高下", tags:["金融","赛事"],
    blurb:"智能算法对决的金融科技舞台，把策略与模型放上擂台，见证 AI 重塑金融决策的未来。" },

  { slug:"skillhub", title:"SkillHub", en:"AI 技能全生命周期管理平台", author:"林下凡", wechat:"swear515", track:"效率工具",
    tagline:"团队技能，一键同步", tags:["团队","平台","效率"],
    blurb:"对话式生成 Skill、一键上线共享、版本管理与评价反馈——让 AI 技能不再散落各处，在团队里自由流动。" },

  { slug:"icebreaker", title:"破冰协议", en:"Icebreaker Protocol", author:"乔瑞雪", track:"效率工具",
    tagline:"给想法一个强制启动键", wechat:"wxid_gmxrwwrn43", tags:["行动","效率","成长"],
    blurb:"专治“想太多、怕做不好、迟迟开不了头”：粗粒度锁定目标、拆成可交付步骤、限时做出雏形。" },

  { slug:"nomoreskill", title:"No More Skill", en:"一个越来越懂你的智能伙伴", author:"曾毅", wechat:"zeng18779566150", track:"效率工具",
    tagline:"少一点技能堆砌，多一点真正成长", tags:["Agent","记忆","成长"],
    blurb:"记忆沉淀、安全守护、持续执行、Workflow 与 Agent 编排，把对话沉淀为越用越有价值的数字资产。" },

  { slug:"hackathon", title:"黑客松比赛夺冠助手", en:"让 AI 成为你赢得比赛的最强队友", author:"胡永宝", track:"效率工具",
    tagline:"一起用 AI 赢得比赛", wechat:"jsnjhyb", tags:["比赛","效率"],
    blurb:"智能节点提醒、AI 导师选题团、大咖模拟质询——从报名截止到决赛答辩，全程为你的参赛之路护航。" },

  { slug:"meetgrow", title:"MeetGrowAI", en:"从 7 天到 30 分钟，效率跃升 560 倍", author:"冯亦根", track:"效率工具",
    tagline:"重新定义会展生产力", wechat:"wxid_1qsyhgydofeh12", tags:["会展","增长","效率"],
    blurb:"AI 大会招商增长 Skill：以成交为导向，一键生成全案、快速复用，把传统 5 人 7 天的工作压缩到 30 分钟。" },

  { slug:"hackflow-ppt", title:"HackFlow PPT", en:"一条 /ppt 命令，生成路演级 PPT", author:"弘文", track:"效率工具",
    tagline:"让你专注作品，PPT 交给它", wechat:"a12451746", tags:["PPT","创作","开源"],
    blurb:"开源 Claude Code Skill 插件：从项目代码到 4K 输出，一条命令生成路演级演示，从代码到提案一气呵成。" },

  { slug:"lumi-lab", title:"Idea 创业实验室", en:"Lumi Lab · 把一句话想法送进实验室", author:"A梦", track:"效率工具",
    tagline:"先验证，再决定要不要真去做", wechat:"zifeixu85", tags:["创业","验证","效率"],
    blurb:"看清楚、测一下、下一步——多通道验证想法、给方向与行动建议，26 个 AI Skills 陪你跑通创业第一步。" },

  { slug:"info-alchemist", title:"信息炼金术士", en:"Info-Alchemist", author:"花生仁", track:"效率工具",
    tagline:"让搜索从“找资料”变成“判断下一步”", wechat:"shanhu52", tags:["搜索","决策","效率"],
    blurb:"明确搜索目的，把官网、新闻、小红书、X、Reddit 等信息炼成你的下一步行动：继续做、观察、小范围验证或放弃。" },

  { slug:"ledger", title:"银砚 · 一句话记账", en:"账本留在本地", author:"冥羽", wechat:"zycXMYH", track:"效率工具",
    tagline:"一句话识别，账本就是一份 ledger.json", tags:["记账","本地","开源"],
    highlight:"全程唯一的初中生选手组合 —— 15 & 16 岁搭档，平均年龄仅 15.5 岁，用一个 Skill 证明：创造力，从不设年龄门槛。",
    blurb:"一句话即可识别并完成记账，本地优先、可靠开源、隐私安全：不自动读取支付流水、不做投资建议、不上传账本。",
    qr:"assets/qr/ledger.png", qrTitle:"群聊：零感无限-ZeroX 种子用户群", qrNote:"扫码加入社群 · 二维码 6 月 7 日前有效" },

  { slug:"hammer-notes", title:"锤子便签 && GARSS 阅读器", en:"不要因为走得太远，就忘了为什么出发", author:null, track:"效率工具",
    tagline:"致敬经典的便签与阅读体验", wechat:"jianzhao111", tags:["工具","内容","阅读"],
    blurb:"把经典的锤子便签书写与 GARSS 阅读体验，用 AI Skill 的方式重新带回到你的日常工作流。" },

  { slug:"xhs-auto", title:"Obsidian x 小红书", en:"一键搜索 · 自动创作 · 全自动发布", author:"春头勇", track:"内容创作",
    tagline:"让 AI 成为你的小红书运营超级助手", wechat:"Patience-no", tags:["小红书","自动化","内容"],
    blurb:"从搜索灵感、浏览评论到 AI 内容生成、一键发布——小红书站内运营全流程自动化。" },

  { slug:"storymap", title:"StoryMap", en:"人物 · 时空 · 事件，历史足迹可视化", author:"崔成", track:"内容创作",
    tagline:"从空间视角读懂历史人物", wechat:"Cui_Zi_Cheng", tags:["可视化","学习","内容"],
    blurb:"提取关键地点与对应事件、精准地理编码、交互式时间轴与足迹路线——“李白的一生足迹”也能一图读懂。" },

  { slug:"brand-growth", title:"AI 时代品牌增长", en:"Brand Growth in the AI Era", author:"王林", wechat:"Handaoxing2013", track:"内容创作",
    tagline:"拆解品牌从 0 到 1 的增长能力", tags:["品牌","增长","方法论"],
    blurb:"系统拆解 AI 时代品牌增长的关键能力与方法论，从早期阶段到规模化增长的完整路径。" },

  { slug:"dialog-sim", title:"对话模拟器", en:"你的专属职场模拟训练场", author:"云深不知梦", wechat:"-1005713142cai", track:"生活成长",
    tagline:"让每一次对话，都成为成长的机会", tags:["职场","沟通","成长"],
    blurb:"沉浸式对话体验，覆盖晋升承诺、股票激诱、情绪缓冲等全职场场景，在模拟中练沟通、在挑战中突破。" },

  { slug:"life-method", title:"AI 时代人生方法论技能库", en:"AI Era Methodology", author:"王林", wechat:"Handaoxing2013", track:"生活成长",
    tagline:"提炼可复用的人生方法论", tags:["方法论","成长"],
    blurb:"基于 AI 时代的洞察，把零散经验提炼成可复用、可执行的人生方法论技能库。" },

  { slug:"takeback", title:"Takeback · 知返", en:"AI 学习人类，人类蒸馏 AI", author:"麦叶", wechat:"wv012138", track:"生活成长",
    tagline:"AI 时代下的新学习范式", tags:["学习","教育"],
    blurb:"AI 学习人类、人类蒸馏 AI——用全新的学习范式，重塑 AI 时代下的教育与学习方式。" },

  { slug:"paradox-court", title:"人生悖论审判庭", en:"PARADOX COURT · 决策分析系统", author:"六耳", wechat:"ainavtool", track:"生活成长",
    tagline:"把你的困惑，送上法庭", tags:["决策","成长"],
    blurb:"CODEX SKILL · 6 步决策分析引擎：面临重大选择时层层审讯困惑，给出可立刻执行的 72 小时实验方案。" },

  { slug:"travel-planner", title:"境旅 Travel Planner", en:"用自然语言，一键生成完整旅行方案", author:"达轮", wechat:"darren94me_", track:"生活成长",
    tagline:"让每一次出行，都从灵感到出发", tags:["旅行","规划","生活"],
    blurb:"输入目的地、天数、预算与人数，自动生成景点、餐饮、路线、每日行程与预算拆分的完整 Place Guide。" },

  { slug:"nut-finance", title:"坚果 · 财务规划", en:"让钱待在合适的位置", author:"高磊", track:"生活成长",
    tagline:"不追热点，不制造焦虑", wechat:"g_phylor", tags:["理财","规划","生活"],
    blurb:"面向理财新手：看清现金流、整理资产负债、制定极简方案、定期复盘，像松鼠存坚果一样安放自己的财产。" },

  { slug:"jung", title:"问荣格", en:"10 问内，照见你此刻靠近的潜意识原型", author:"口袋君", track:"生活成长",
    tagline:"给你一个可以继续想的象征", wechat:"pocketfuns", tags:["心理","探索","生活"],
    blurb:"符号识别型体验：抽卡、对话、读片，一次通过图像、象征与追问开启的向内自我探索，结果不是标签而是象征。" },

  { slug:"profiling", title:"侧写技 · 慧眼社区", en:"洞察人心，看透本质", author:"土狗", track:"生活成长",
    tagline:"数据非真相，行为即密码", wechat:"LDKZKingOrKing", tags:["洞察","社区","生活"],
    blurb:"洞察人心、看透本质、掌控时机、改写结局——把每一次选择，照见背后的命运与逻辑。" },

  { slug:"child-face", title:"孩子长相预测", en:"上传两张照片，解读未来七段人生", author:"庄工", track:"生活成长",
    tagline:"我连咱俩孩子长啥样都想好了", wechat:"JinxThePM", tags:["娱乐","AI","生活"],
    blurb:"两张照片、七个阶段、一份报告，从婴儿到老年解读未来七段人生——仅供娱乐参考，不代表真实预测。" }
];
