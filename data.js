const EPISODES = [
  { id:"S01E01", n:1, season:1, episode:1, pdf:"https://8flix.com/transcripts/sex-education-season-1-dialogue/", summary:"Otis discovers that his awkward home life with sex therapist Jean can become useful at school. Maeve spots his talent and pushes him into a paid underground advice service, while Eric remains his emotional anchor and Adam exposes how shame and pressure shape Moordale.", characters:["Otis","Maeve","Eric","Jean","Adam","Aimee","Jackson"] },
  { id:"S01E02", n:2, season:1, episode:2, pdf:"https://8flix.com/transcripts/sex-education-season-1-dialogue/", summary:"The clinic becomes a real operation. Otis starts mediating other students' anxieties while hiding his own feelings for Maeve. Jackson asks Otis for insight into Maeve, creating the first major triangle.", characters:["Otis","Maeve","Jackson","Eric","Jean","Aimee"] },
  { id:"S01E03", n:3, season:1, episode:3, pdf:"https://8flix.com/transcripts/sex-education-season-1-dialogue/", summary:"Maeve's abortion reveals her isolation and Otis's capacity for quiet loyalty. Their bond deepens outside the clinic. Adam and Aimee's relationship continues to show imbalance and public performance.", characters:["Maeve","Otis","Aimee","Adam","Eric","Jean"] },
  { id:"S01E04", n:4, season:1, episode:4, pdf:"https://8flix.com/transcripts/sex-education-season-1-dialogue/", summary:"A leaked intimate photo forces the school to confront humiliation and solidarity. Maeve helps another girl reclaim agency, Jean meets Jakob, and Otis notices Ola, complicating his fixation on Maeve.", characters:["Otis","Maeve","Jean","Jakob","Ola","Ruby","Aimee","Eric"] },
  { id:"S01E05", n:5, season:1, episode:5, pdf:"https://8flix.com/transcripts/sex-education-season-1-dialogue/", summary:"Otis chooses clinic and Maeve-related chaos over Eric's birthday, and Eric is attacked after being left alone. The friendship fractures. Maeve and Jackson move closer, turning Otis's advice into emotional self-sabotage.", characters:["Otis","Eric","Maeve","Jackson","Jean","Adam"] },
  { id:"S01E06", n:6, season:1, episode:6, pdf:"https://8flix.com/transcripts/sex-education-season-1-dialogue/", summary:"Eric returns changed and guarded, while Otis struggles to repair the damage. Jean and Jakob's relationship pushes Otis into discomfort at home. Adam's anger keeps hiding fear of failure.", characters:["Eric","Otis","Jean","Jakob","Adam","Maeve","Jackson"] },
  { id:"S01E07", n:7, season:1, episode:7, pdf:"https://8flix.com/transcripts/sex-education-season-1-dialogue/", summary:"Maeve's home life and academic potential collide. Otis becomes more openly jealous of Jackson. Eric begins reclaiming confidence, and Adam's crisis with school authority intensifies.", characters:["Maeve","Otis","Jackson","Eric","Adam","Aimee","Jean"] },
  { id:"S01E08", n:8, season:1, episode:8, pdf:"https://8flix.com/transcripts/sex-education-season-1-dialogue/", summary:"The clinic is exposed and the season's hidden feelings surface. Maeve realizes what Otis has meant to her, but timing fails. Otis begins with Ola, Adam is sent away, and Eric steps back into joy.", characters:["Otis","Maeve","Eric","Adam","Ola","Jean","Jackson","Aimee"] },
  { id:"S02E01", n:9, season:2, episode:1, pdf:"https://8flix.com/transcripts/sex-education-season-2-dialogue/", summary:"A school health panic makes sex education public and institutional. Jean enters Moordale's orbit, threatening Otis's secret authority. Maeve returns to school and tries to rebuild control.", characters:["Otis","Jean","Maeve","Eric","Ola","Adam","Jackson","Aimee"] },
  { id:"S02E02", n:10, season:2, episode:2, pdf:"https://8flix.com/transcripts/sex-education-season-2-dialogue/", summary:"Otis and Ola try to become a couple while Maeve pursues academic validation. Jackson's pressure becomes more dangerous. Adam's exile strips away his school persona.", characters:["Otis","Ola","Maeve","Jackson","Viv","Adam","Jean","Eric"] },
  { id:"S02E03", n:11, season:2, episode:3, pdf:"https://8flix.com/transcripts/sex-education-season-2-dialogue/", summary:"Aimee's assault on the bus begins a long trauma arc. Eric meets Rahim and imagines a calmer kind of romance. Maeve's aptitude and intelligence are taken more seriously.", characters:["Aimee","Maeve","Eric","Rahim","Otis","Adam","Jackson","Viv"] },
  { id:"S02E04", n:12, season:2, episode:4, pdf:"https://8flix.com/transcripts/sex-education-season-2-dialogue/", summary:"Maeve's mother Erin and half-sister Elsie re-enter her life, forcing Maeve to choose between hope and caution. Otis and Ola's relationship strains under unresolved feelings.", characters:["Maeve","Erin","Elsie","Otis","Ola","Jean","Jakob","Aimee"] },
  { id:"S02E05", n:13, season:2, episode:5, pdf:"https://8flix.com/transcripts/sex-education-season-2-dialogue/", summary:"The quiz team and school-trip dynamics put Maeve, Viv and Jackson into new alliances. Eric is pulled between Rahim's stability and Adam's vulnerability. Jackson begins loosening his identity as only a swimmer.", characters:["Maeve","Viv","Jackson","Eric","Rahim","Adam","Otis","Ola"] },
  { id:"S02E06", n:14, season:2, episode:6, pdf:"https://8flix.com/transcripts/sex-education-season-2-dialogue/", summary:"Aimee's trauma becomes visible to the girls, who begin forming a support network around her. Jean's research exposes how badly Moordale needs honest education. Otis keeps avoiding emotional accountability.", characters:["Aimee","Maeve","Viv","Olivia","Ruby","Jean","Otis","Ola"] },
  { id:"S02E07", n:15, season:2, episode:7, pdf:"https://8flix.com/transcripts/sex-education-season-2-dialogue/", summary:"Otis's party turns his repression into public cruelty. He wounds Maeve and Ola, loses moral authority, and has an unexpected night with Ruby. Multiple relationships hit a breaking point.", characters:["Otis","Maeve","Ola","Ruby","Eric","Adam","Jean","Jakob"] },
  { id:"S02E08", n:16, season:2, episode:8, pdf:"https://8flix.com/transcripts/sex-education-season-2-dialogue/", summary:"The musical and school fallout bring confessions and consequences. Adam declares himself to Eric, Ola and Lily choose each other, Maeve protects Elsie by reporting Erin, and Isaac deletes Otis's voicemail.", characters:["Otis","Maeve","Isaac","Eric","Adam","Ola","Lily","Jean","Aimee"] },
  { id:"S03E01", n:17, season:3, episode:1, pdf:"https://8flix.com/transcripts/sex-education-season-3-dialogue/", summary:"Hope arrives with a polished reform agenda and begins reshaping Moordale. Otis hides vulnerability inside casual sex with Ruby. Maeve grows closer to Isaac, and Jean's pregnancy changes the family stakes.", characters:["Hope","Otis","Ruby","Maeve","Isaac","Jean","Adam","Eric","Cal"] },
  { id:"S03E02", n:18, season:3, episode:2, pdf:"https://8flix.com/transcripts/sex-education-season-3-dialogue/", summary:"Ruby and Otis become public, exposing class and status tensions. Adam and Eric try being a couple in ordinary school life. Cal resists Hope's gendered control.", characters:["Ruby","Otis","Eric","Adam","Hope","Cal","Jackson","Maeve","Isaac"] },
  { id:"S03E03", n:19, season:3, episode:3, pdf:"https://8flix.com/transcripts/sex-education-season-3-dialogue/", summary:"Ruby opens up emotionally but Otis cannot meet her declaration, ending their relationship. Maeve and Isaac's intimacy grows while the missing voicemail continues to shadow Otis and Maeve.", characters:["Ruby","Otis","Maeve","Isaac","Jean","Jakob","Eric","Adam"] },
  { id:"S03E04", n:20, season:3, episode:4, pdf:"https://8flix.com/transcripts/sex-education-season-3-dialogue/", summary:"The France trip traps unresolved feelings in motion. Otis and Maeve finally confront the deleted voicemail and kiss, but existing commitments remain. Hope's control of the school becomes more punitive.", characters:["Otis","Maeve","Isaac","Hope","Viv","Jackson","Cal","Adam","Eric"] },
  { id:"S03E05", n:21, season:3, episode:5, pdf:"https://8flix.com/transcripts/sex-education-season-3-dialogue/", summary:"Eric's Nigeria trip widens his sense of queer identity beyond Moordale. Adam tries to grow but cannot yet follow Eric's pace. Maeve is caught between Isaac's honesty and Otis's renewed presence.", characters:["Eric","Adam","Maeve","Isaac","Otis","Jean","Jakob","Aimee"] },
  { id:"S03E06", n:22, season:3, episode:6, pdf:"https://8flix.com/transcripts/sex-education-season-3-dialogue/", summary:"Hope publicly shames students, turning private struggles into political conflict. The student body starts moving from embarrassment to resistance. Maeve makes a painful choice about Isaac and Otis.", characters:["Hope","Cal","Adam","Lily","Maeve","Otis","Eric","Jean","Aimee"] },
  { id:"S03E07", n:23, season:3, episode:7, pdf:"https://8flix.com/transcripts/sex-education-season-3-dialogue/", summary:"The students reclaim Moordale's reputation as Sex School. Jean gives birth under frightening circumstances, Eric tells Adam the truth, and several characters choose honesty over image.", characters:["Jean","Otis","Jakob","Eric","Adam","Hope","Viv","Jackson","Cal","Lily"] },
  { id:"S03E08", n:24, season:3, episode:8, pdf:"https://8flix.com/transcripts/sex-education-season-3-dialogue/", summary:"Moordale loses funding, scattering the community. Maeve chooses the America program, Otis accepts waiting, Eric and Adam separate, and Jean receives a paternity shock that keeps her future unstable.", characters:["Maeve","Otis","Eric","Adam","Jean","Jakob","Hope","Cal","Jackson","Aimee"] },
  { id:"S04E01", n:25, season:4, episode:1, pdf:"https://8flix.com/transcripts/sex-education-season-4-dialogue/", summary:"The characters arrive at Cavendish or new adult spaces. Otis tries to restart the clinic but meets O as a rival therapist. Maeve studies in America, Eric enters a queer friendship group, and Jean struggles with postpartum life.", characters:["Otis","O","Maeve","Jean","Eric","Abbi","Roman","Aisha","Ruby","Adam"] },
  { id:"S04E02", n:26, season:4, episode:2, pdf:"https://8flix.com/transcripts/sex-education-season-4-dialogue/", summary:"Otis campaigns for legitimacy at Cavendish and relies on Ruby's social knowledge. Maeve faces a harsher writing world. Aimee turns trauma into art, and Adam finds quiet purpose outside school.", characters:["Otis","Ruby","O","Maeve","Aimee","Adam","Eric","Jean","Jackson"] },
  { id:"S04E03", n:27, season:4, episode:3, pdf:"https://8flix.com/transcripts/sex-education-season-4-dialogue/", summary:"Maeve is pulled home by family loss, forcing America and Moordale into the same emotional frame. Jean's sister Joanna disrupts the house, and Viv's new romance begins with warning signs.", characters:["Maeve","Otis","Jean","Joanna","Aimee","Viv","Beau","Eric","Ruby"] },
  { id:"S04E04", n:28, season:4, episode:4, pdf:"https://8flix.com/transcripts/sex-education-season-4-dialogue/", summary:"Grief, intimacy and old patterns collide. Otis and Maeve try to be a couple under pressure. Eric's faith and queer identity continue to pull against each other, while Jean and Joanna's family history surfaces.", characters:["Maeve","Otis","Eric","Jean","Joanna","Aimee","Isaac","Adam","Michael"] },
  { id:"S04E05", n:29, season:4, episode:5, pdf:"https://8flix.com/transcripts/sex-education-season-4-dialogue/", summary:"Cavendish politics expose Otis's insecurity and O's own history. Maeve works through grief with help from chosen family. Ruby's history with O reframes her defensive persona.", characters:["Otis","O","Ruby","Maeve","Aimee","Isaac","Eric","Abbi","Roman","Aisha"] },
  { id:"S04E06", n:30, season:4, episode:6, pdf:"https://8flix.com/transcripts/sex-education-season-4-dialogue/", summary:"Jean and Joanna confront trauma and responsibility. Adam and Michael continue slow repair. Aimee and Isaac's connection becomes creative and romantic, and Maeve faces whether returning to America is an escape or a future.", characters:["Jean","Joanna","Adam","Michael","Aimee","Isaac","Maeve","Otis","Jackson"] },
  { id:"S04E07", n:31, season:4, episode:7, pdf:"https://8flix.com/transcripts/sex-education-season-4-dialogue/", summary:"Fundraising and community pressure turn private decisions public. Eric receives a spiritual call that does not require shrinking himself. Viv recognizes danger in Beau's control.", characters:["Eric","Otis","O","Maeve","Viv","Beau","Ruby","Abbi","Roman","Aisha","Jean"] },
  { id:"S04E08", n:32, season:4, episode:8, pdf:"https://8flix.com/transcripts/sex-education-season-4-dialogue/", summary:"The finale resolves by letting people choose healthier distance. Maeve returns to America and leaves Otis with love rather than dependency. Eric embraces a future in faith, Adam reconnects with family, Jean accepts help, and Aimee starts a new chapter.", characters:["Maeve","Otis","Eric","Adam","Jean","Aimee","Isaac","Ruby","O","Michael","Jackson","Cal"] }
];

const CHARACTERS = [
  { id:"Otis", color:"#6750A4", role:"不情愿的治疗者 / 情感回避者", core:"Otis 的主线是从把母亲的知识当成技术，到承认自己也需要诚实、边界和成长。他的关系常因为迟疑、嫉妒和控制欲受伤，最后学会让爱不等于占有。", events:[
    ["S01E01","被 Maeve 拉进地下性咨询，第一次把观察力变成行动。",["Maeve","Eric","Jean"]],
    ["S01E05","为了 Maeve 和诊所忽视 Eric，友情遭到严重破坏。",["Eric","Maeve"]],
    ["S01E08","错过 Maeve 的情感窗口，开始和 Ola 交往。",["Maeve","Ola"]],
    ["S02E07","醉酒派对伤害 Maeve 与 Ola，暴露他的自我中心。",["Maeve","Ola","Ruby"]],
    ["S02E08","给 Maeve 留下道歉与表白 voicemail，但被 Isaac 删除。",["Maeve","Isaac"]],
    ["S03E03","无法回应 Ruby 的爱，结束一段让他看见阶层差异的关系。",["Ruby"]],
    ["S03E04","与 Maeve 正面谈 voicemail 并接吻，旧感情重新打开。",["Maeve","Isaac"]],
    ["S03E08","接受 Maeve 去美国，把关系放入等待而非占有。",["Maeve"]],
    ["S04E01","在 Cavendish 与 O 竞争治疗师身份，旧自尊问题复发。",["O","Ruby"]],
    ["S04E08","与 Maeve 分开但保留爱意，完成从控制到放手的转变。",["Maeve","Eric","Jean"]]
  ]},
  { id:"Maeve", color:"#006A6A", role:"幸存者 / 作家 / 自我选择者", core:"Maeve 的主线是从防御性独立走向有选择地接受帮助。她不断在贫困、家庭混乱、学术机会和亲密关系之间做选择，最终把写作与离开当成自我拯救。", events:[
    ["S01E01","看出 Otis 的价值，创办诊所作为生存策略。",["Otis"]],
    ["S01E03","经历 abortion，Otis 的陪伴让她第一次松动防备。",["Otis"]],
    ["S01E08","意识到对 Otis 的感情但错过时机。",["Otis","Ola"]],
    ["S02E04","母亲 Erin 和 Elsie 回归，家庭希望与危险并存。",["Erin","Elsie"]],
    ["S02E08","举报 Erin 保护 Elsie，同时被 Isaac 删除 Otis 的留言。",["Erin","Elsie","Isaac","Otis"]],
    ["S03E04","得知 voicemail 真相，与 Otis 接吻，但关系仍被过去牵扯。",["Otis","Isaac"]],
    ["S03E08","选择美国项目，把未来放在爱情之前。",["Otis","Aimee"]],
    ["S04E03","因母亲去世回国，旧家庭创伤和新写作身份冲突。",["Otis","Aimee","Jean"]],
    ["S04E06","决定把美国视为真正机会，而不是逃避。",["Otis"]],
    ["S04E08","写信告别 Otis，选择成为作家和完整的自己。",["Otis","Aimee"]]
  ]},
  { id:"Eric", color:"#B3261E", role:"信仰、酷儿身份与自我表达", core:"Eric 的主线是拒绝缩小自己。从被攻击后的恐惧，到公开恋爱，再到发现爱情、教会和身份不能靠牺牲自我来换取。", events:[
    ["S01E01","作为 Otis 最亲密的朋友，承担幽默和情感支撑。",["Otis"]],
    ["S01E05","生日被 Otis 抛下后遭遇袭击，身份安全感崩塌。",["Otis"]],
    ["S01E08","重新穿回鲜艳表达，恢复自我。",["Otis"]],
    ["S02E03","遇见 Rahim，体验更稳定公开的亲密关系。",["Rahim","Adam"]],
    ["S02E08","Adam 当众表白，Eric 选择真实冲动而非安全。",["Adam","Rahim"]],
    ["S03E05","Nigeria 之行让他看到更广阔的 queer 世界。",["Adam"]],
    ["S03E08","与 Adam 分手，因为两人的成长速度不同。",["Adam"]],
    ["S04E01","进入 Cavendish queer 朋友圈，同时寻找信仰位置。",["Abbi","Roman","Aisha"]],
    ["S04E07","意识到自己的 spiritual calling 不必抹掉酷儿身份。",["Abbi","Roman","Aisha"]],
    ["S04E08","选择面向未来的信仰道路，成为更完整的 Eric。",["Otis"]]
  ]},
  { id:"Jean", color:"#7D5260", role:"母亲 / 治疗师 / 控制与脆弱", core:"Jean 的主线是从专业权威到承认自己也会失控。她越想掌握 Otis 和家庭，越暴露孤独；Joy 的出生和 Joanna 的出现迫使她接受帮助。", events:[
    ["S01E01","作为性治疗师和过度介入的母亲，定义 Otis 的家庭压力。",["Otis"]],
    ["S01E04","与 Jakob 相遇，开始挑战她的亲密边界。",["Jakob","Ola"]],
    ["S02E01","进入 Moordale 性教育体系，与 Otis 的秘密权威冲突。",["Otis"]],
    ["S02E08","发现怀孕，让她与 Jakob 的关系进入不确定状态。",["Jakob"]],
    ["S03E07","生下 Joy，生命危险让 Otis 与 Jakob 的恐惧集中爆发。",["Otis","Jakob"]],
    ["S03E08","亲子鉴定结果制造新的家庭裂缝。",["Jakob","Otis"]],
    ["S04E01","独自照顾 Joy 并尝试广播工作，产后压力明显。",["Otis","Joanna"]],
    ["S04E06","与 Joanna 面对家庭创伤，学会不把所有事独自扛住。",["Joanna"]],
    ["S04E08","接受支持，成为更诚实的母亲而不是完美专家。",["Otis","Joanna"]]
  ]},
  { id:"Adam", color:"#386A20", role:"羞耻、父权压力与迟缓成长", core:"Adam 从校园霸凌者变成一个笨拙但真诚的人。他的成长不是突然变好，而是反复学习表达、道歉、工作和与父亲重新建立关系。", events:[
    ["S01E01","以霸凌和性焦虑出场，体现 Groff 家庭压力。",["Eric","Aimee","Michael"]],
    ["S01E08","被送去军校，家庭权威暂时获胜。",["Michael"]],
    ["S02E08","在音乐剧上向 Eric 表白，第一次公开冒险。",["Eric","Rahim"]],
    ["S03E02","尝试与 Eric 做普通情侣，但表达能力跟不上情感。",["Eric"]],
    ["S03E07","写诗和训练狗，显露温柔但仍不安全。",["Eric","Michael"]],
    ["S03E08","与 Eric 分手，开始独立成长而非只追逐对方。",["Eric"]],
    ["S04E02","离开传统学校路径，在农场/马场找到安静能力。",["Michael"]],
    ["S04E06","与 Michael 的修复开始有真实行动。",["Michael"]],
    ["S04E08","父子关系重新打开，Adam 获得更稳定的自我感。",["Michael","Maureen"]]
  ]},
  { id:"Aimee", color:"#A23F00", role:"创伤复原 / 友谊 / 艺术", core:"Aimee 的主线从讨好和天真转向身体自主。公交车 assault 后，她通过女性友谊、治疗式表达和摄影慢慢把创伤转化成主体性。", events:[
    ["S01E03","与 Adam 的关系暴露她习惯迁就他人。",["Adam","Maeve"]],
    ["S02E03","在公交车上遭遇 assault，长期创伤线开启。",["Maeve"]],
    ["S02E06","女孩们围绕她形成支持网络，她不再独自处理羞耻。",["Maeve","Viv","Ruby","Olivia"]],
    ["S02E08","重新坐上公交，象征复原不是遗忘而是被陪伴。",["Maeve"]],
    ["S03E05","与 Maeve 的友情成为她理解创伤的重要支点。",["Maeve"]],
    ["S04E02","用艺术处理身体与记忆，开始新的表达方式。",["Isaac"]],
    ["S04E06","与 Isaac 的关系结合创作和尊重。",["Isaac"]],
    ["S04E08","开始更自由的阶段，不再只被创伤定义。",["Maeve","Isaac"]]
  ]},
  { id:"Ruby", color:"#904A42", role:"地位外壳下的脆弱", core:"Ruby 从学校女王逐渐显露家庭压力、羞耻和被排斥的历史。她与 Otis 的关系让她短暂打开，但也学会不把自尊交给对方。", events:[
    ["S01E04","围绕泄露照片的事件展示她的地位和脆弱并存。",["Maeve","Olivia"]],
    ["S02E07","与 Otis 的意外夜晚让两人的阶层和名声产生交集。",["Otis"]],
    ["S03E01","与 Otis 维持 casual 关系，用控制保护自我。",["Otis"]],
    ["S03E03","向 Otis 表白被拒，外壳破裂。",["Otis"]],
    ["S04E02","帮助 Otis 竞选，既想被需要又不愿再被轻视。",["Otis","O"]],
    ["S04E05","O 的旧排斥解释 Ruby 的防御来源。",["O","Otis"]],
    ["S04E08","没有轻易原谅 Otis，转向新的社交位置。",["Otis","O"]]
  ]},
  { id:"Jackson", color:"#006D3B", role:"成就压力 / 身份重建", core:"Jackson 从明星游泳运动员转向寻找不由父母和成绩定义的自我。他的线常与 Maeve、Viv、Cal 相交，分别代表欲望、友谊和身份开放。", events:[
    ["S01E02","通过 Otis 接近 Maeve，成功恋爱但埋下不真实的起点。",["Otis","Maeve"]],
    ["S01E08","与 Maeve 分开，开始面对被理想化的压力。",["Maeve"]],
    ["S02E02","压力导致自我伤害，暴露冠军身份的代价。",["Viv"]],
    ["S02E05","与 Viv 建立互助，找到非浪漫支持。",["Viv"]],
    ["S03E02","与 Cal 的相遇打开他对性别与吸引的理解。",["Cal"]],
    ["S03E08","与 Cal 的距离说明理解不等于立刻成熟。",["Cal"]],
    ["S04E06","健康焦虑和家庭问题让他重新面对身体与安全感。",["Viv"]],
    ["S04E08","带着更复杂的自我认知进入下一阶段。",["Cal","Viv"]]
  ]},
  { id:"Viv", color:"#5D5FEF", role:"理性、野心与边界", core:"Viv 从高成就旁观者进入更复杂的人际世界。她帮助 Jackson，也会被权力认可诱惑；最后通过 Beau 线学习识别控制和保护自己。", events:[
    ["S02E02","开始辅导/支持 Jackson，与他形成非浪漫伙伴关系。",["Jackson"]],
    ["S02E05","在 quiz team 中与 Maeve 形成竞争与尊重。",["Maeve","Jackson"]],
    ["S03E06","在 Hope 的制度诱惑中看见权力与学生利益的冲突。",["Hope"]],
    ["S03E08","站回学生群体，理解规则不总等于正义。",["Hope","Jackson"]],
    ["S04E03","开始与 Beau 交往，控制迹象逐渐出现。",["Beau"]],
    ["S04E07","识别 Beau 的占有和危险，边界意识成型。",["Beau"]],
    ["S04E08","选择离开控制关系，保住自己的未来。",["Beau","Jackson"]]
  ]},
  { id:"Cal", color:"#00639B", role:"非二元身份与制度冲突", core:"Cal 的主线是身体、校服、欲望和制度如何互相冲突。他们让 Moordale 的改革暴露压迫性，也让 Jackson 学会吸引不应建立在简化别人身份上。", events:[
    ["S03E01","进入 Moordale，立刻与 Hope 的性别规范发生冲突。",["Hope"]],
    ["S03E02","与 Jackson 建立吸引，同时坚持自己的身份边界。",["Jackson"]],
    ["S03E06","被 Hope 的制度羞辱伤害，成为学生反抗的重要触发点。",["Hope","Jackson"]],
    ["S03E08","在混乱中寻找安全和被理解。",["Jackson"]],
    ["S04E08","作为 Cavendish 社群的一部分，延续身份与支持主题。",["Jackson"]]
  ]},
  { id:"Isaac", color:"#6D5E00", role:"控制、悔意与亲密边界", core:"Isaac 先以保护 Maeve 的姿态做出控制行为，之后通过坦白和接受后果成长。后期与 Aimee 的线让他从竞争者变成更平等的创作伙伴。", events:[
    ["S02E08","删除 Otis 的 voicemail，改变 Maeve 和 Otis 的时间线。",["Maeve","Otis"]],
    ["S03E01","与 Maeve 更亲密，但秘密仍在关系底部。",["Maeve"]],
    ["S03E04","voicemail 真相被揭开，他必须承担后果。",["Maeve","Otis"]],
    ["S03E05","与 Maeve 的关系短暂修复但无法逃开旧伤。",["Maeve"]],
    ["S04E02","通过艺术课与 Aimee 产生新的平等连接。",["Aimee"]],
    ["S04E06","与 Aimee 的亲密建立在尊重和共同创作上。",["Aimee"]],
    ["S04E08","进入不再围绕 Maeve 的新生活线。",["Aimee"]]
  ]},
  { id:"O", color:"#6750A4", role:"镜像治疗师 / 声誉政治", core:"O 是 Otis 的镜像：同样聪明、会咨询，但也被声誉和过去伤害塑形。她的存在把治疗师身份从天赋问题变成责任、透明和修复问题。", events:[
    ["S04E01","作为 Cavendish 既有学生治疗师，与 Otis 形成直接竞争。",["Otis"]],
    ["S04E02","竞选让两人的专业身份变成校园政治。",["Otis","Ruby"]],
    ["S04E05","与 Ruby 的旧事揭开，显示她也曾通过排斥保护自己。",["Ruby"]],
    ["S04E07","被迫面对公开道歉和真实修复。",["Otis","Ruby"]],
    ["S04E08","与 Otis 的竞争降温，咨询角色变得更成熟。",["Otis","Ruby"]]
  ]},
  { id:"Ola", color:"#984061", role:"混合家庭与自我发现", core:"Ola 的线从 Otis 的替代恋人变成独立的 queer 自我发现。她和 Lily 的关系让她摆脱 Otis/Maeve 三角的附属位置。", events:[
    ["S01E04","通过 Jakob 与 Otis 家庭交集，成为 Otis 的新可能。",["Otis","Jean","Jakob"]],
    ["S01E08","与 Otis 开始交往，错开 Maeve 的表白窗口。",["Otis","Maeve"]],
    ["S02E07","Otis 派对上的羞辱让她结束不适合的关系。",["Otis"]],
    ["S02E08","选择 Lily，明确自己的欲望方向。",["Lily"]],
    ["S03E08","家庭和身份线逐渐稳定。",["Lily","Jakob"]]
  ]},
  { id:"Lily", color:"#8B418F", role:"幻想、羞耻与创造性身份", core:"Lily 的主线是把奇异想象从被嘲笑的对象变成自我表达。Hope 对她的羞辱是制度压制差异的高峰，Ola 则成为她被看见的关系。", events:[
    ["S02E08","与 Ola 互相选择，开启更诚实的亲密关系。",["Ola"]],
    ["S03E01","在 Moordale 的新规训中变得不安。",["Hope","Ola"]],
    ["S03E06","被 Hope 羞辱后压抑自我，是学生反抗的重要原因。",["Hope","Ola"]],
    ["S03E08","重新接近自己的幻想世界，不再完全让羞耻定义。",["Ola"]]
  ]},
  { id:"Jakob", color:"#4C662B", role:"稳定伴侣与父职不确定", core:"Jakob 代表 Jean 生活里朴素、稳定但也会受伤的亲密关系。Joy 的父亲问题让他的信任线变得复杂。", events:[
    ["S01E04","作为 Ola 的父亲进入 Jean 的生活。",["Jean","Ola"]],
    ["S02E08","Jean 怀孕使他卷入新的家庭未来。",["Jean"]],
    ["S03E07","Joy 出生时与 Jean 共同经历恐惧。",["Jean","Otis"]],
    ["S03E08","亲子鉴定冲击关系，稳定形象被打破。",["Jean","Joy"]]
  ]},
  { id:"Michael", color:"#705D00", role:"失败权威到学习道歉", core:"Michael Groff 从压迫性的校长和父亲变成失势者。他的后期价值在于慢慢学习承担责任，而不是继续用权威保护自尊。", events:[
    ["S01E01","以校长和父亲身份压迫 Adam，制造 Adam 的羞耻结构。",["Adam","Maureen"]],
    ["S03E07","失势后仍难以表达爱，但 Adam 的变化开始影响他。",["Adam"]],
    ["S04E04","尝试靠近 Adam，方式笨拙但动机改变。",["Adam","Maureen"]],
    ["S04E06","与 Adam 的修复有了实际行动。",["Adam"]],
    ["S04E08","父子重新打开关系，权威转向陪伴。",["Adam","Maureen"]]
  ]},
  { id:"Hope", color:"#7A4D00", role:"体面改革与制度暴力", core:"Hope 以现代化校长形象出现，但她的改革建立在控制、羞辱和压制差异上。她也有私人痛苦，但这不取消她对学生造成的伤害。", events:[
    ["S03E01","接管 Moordale，以形象管理包装控制。",["Otis","Cal","Viv"]],
    ["S03E02","通过校服和规章压制学生身体表达。",["Cal","Jackson"]],
    ["S03E06","公开羞辱学生，矛盾爆发。",["Cal","Lily","Adam"]],
    ["S03E07","学生以 Sex School 身份反击她的体面叙事。",["Viv","Otis"]],
    ["S03E08","Moordale 关闭后，她的权威失败，同时显露个人脆弱。",["Otis","Maeve"]]
  ]},
  { id:"Joanna", color:"#8C1D18", role:"家庭创伤与姐妹修复", core:"Joanna 让 Jean 的原生家庭问题具体化。她不是单纯麻烦制造者，而是把 Jean 长期压下的创伤和责任感带回家。", events:[
    ["S04E01","进入 Jean 家庭，打乱 Jean 对产后生活的控制。",["Jean","Otis"]],
    ["S04E03","她的存在使 Jean 的脆弱和愤怒更明显。",["Jean"]],
    ["S04E06","姐妹共同面对创伤，关系从指责转向修复。",["Jean"]],
    ["S04E08","离开前让 Jean 接受不必独自承担一切。",["Jean"]]
  ]},
  { id:"Abbi", color:"#006874", role:"Cavendish 社群与善意压力", core:"Abbi 代表 Cavendish 的友善文化，也暴露过度积极会压住真实冲突。她和 Roman、Aisha 帮 Eric 看见新的 queer 社群。", events:[
    ["S04E01","欢迎 Eric 进入 Cavendish queer 圈子。",["Eric","Roman","Aisha"]],
    ["S04E05","朋友圈内部也需要真实沟通，而不只是保持 positivity。",["Eric","Roman","Aisha"]],
    ["S04E07","支持 Eric 面对信仰与身份选择。",["Eric","Roman","Aisha"]]
  ]},
  { id:"Roman", color:"#006874", role:"Cavendish 亲密关系与表达", core:"Roman 的线主要服务于 Cavendish 社群：他和 Abbi 的关系让亲密、身体、表达和社群压力进入新学校空间。", events:[
    ["S04E01","与 Abbi、Aisha 一起构成 Eric 的新社交入口。",["Eric","Abbi","Aisha"]],
    ["S04E05","与 Abbi 的亲密问题提示开放社群也有沉默。",["Abbi"]],
    ["S04E07","参与支持 Eric 的身份选择。",["Eric","Abbi","Aisha"]]
  ]},
  { id:"Aisha", color:"#006874", role:"Cavendish 朋友圈的观察者", core:"Aisha 帮助 Cavendish 群体从一个理想化空间变得具体：友善、残障经验、边界和真实沟通都需要被看见。", events:[
    ["S04E01","作为 Cavendish 圈子成员接纳 Eric。",["Eric","Abbi","Roman"]],
    ["S04E05","参与朋友圈内部的真实沟通。",["Abbi","Roman"]],
    ["S04E07","支持 Eric 面对精神召唤。",["Eric"]]
  ]},
  { id:"Rahim", color:"#78536B", role:"安全选择与诗性自我", core:"Rahim 是 Eric 在 Adam 之外看到的稳定可能。他的作用不是失败恋人，而是让 Eric 明白安全与激情、公开与成长并不总在同一个人身上。", events:[
    ["S02E03","与 Eric 相遇，提供更成熟平稳的浪漫可能。",["Eric"]],
    ["S02E08","Adam 公开表白后被 Eric 放弃，成为 Eric 选择的代价。",["Eric","Adam"]],
    ["S03E07","与 Adam 的诗意连接反衬 Adam 未被看见的一面。",["Adam"]]
  ]},
  { id:"Beau", color:"#8C1D18", role:"控制型恋爱警示", core:"Beau 的主线服务于 Viv 的边界成长。他开始像浪漫对象，逐步显露监控、占有和情绪控制。", events:[
    ["S04E03","与 Viv 开始恋爱，早期吸引掩盖控制迹象。",["Viv"]],
    ["S04E07","控制行为变得清晰，Viv 开始识别危险。",["Viv"]],
    ["S04E08","Viv 选择离开，完成边界建立。",["Viv"]]
  ]},
  { id:"Erin", color:"#6B5E62", role:"Maeve 的母亲 / 希望与失望", core:"Erin 的出现让 Maeve 面对最难的亲情问题：她渴望母亲变好，但也必须保护 Elsie 和自己。", events:[
    ["S02E04","带着 Elsie 回到 Maeve 生活，短暂制造家庭可能。",["Maeve","Elsie"]],
    ["S02E08","复发与失职让 Maeve 做出举报决定。",["Maeve","Elsie"]],
    ["S04E03","她的死亡把 Maeve 拉回家，也迫使 Maeve重新处理爱、愤怒和哀悼。",["Maeve"]]
  ]},
  { id:"Elsie", color:"#6B5E62", role:"Maeve 想保护的妹妹", core:"Elsie 是 Maeve 家庭线里最清楚的道德锚点。她让 Maeve 的选择从个人忍耐变成保护下一代。", events:[
    ["S02E04","与 Erin 一起回到 Maeve 身边，触发 Maeve 的家庭希望。",["Maeve","Erin"]],
    ["S02E08","Maeve 为保护她而举报 Erin。",["Maeve","Erin"]]
  ]},
  { id:"Maureen", color:"#625B71", role:"家庭重建与温柔边界", core:"Maureen 从 Michael 的婚姻阴影中走出，也给 Adam 留下更柔软的家庭可能。她的线强调离开控制后仍能修复关系。", events:[
    ["S01E01","处在 Groff 家庭压抑结构中，Adam 的家庭压力由此可见。",["Adam","Michael"]],
    ["S04E04","观察 Michael 对 Adam 的笨拙靠近，家庭修复开始变得可能。",["Michael","Adam"]],
    ["S04E08","与 Adam、Michael 形成更松动但更真实的家庭连接。",["Adam","Michael"]]
  ]},
  { id:"Olivia", color:"#904A42", role:"Untouchables 成员 / 羞耻与同伴压力", core:"Olivia 的功能主要在学校社交阶层：她参与 Ruby 的圈子，也在女性支持线里从旁观者变成同伴。", events:[
    ["S01E04","泄露照片事件让她和 Ruby 圈子的羞耻政治被放大。",["Ruby","Maeve"]],
    ["S02E06","在 Aimee 的支持网络中成为女孩联盟的一部分。",["Aimee","Ruby","Maeve"]]
  ]},
  { id:"Joy", color:"#7D5260", role:"Jean 的孩子 / 家庭未来", core:"Joy 本身没有主动剧情，但她改变 Jean、Otis、Jakob 和 Joanna 的家庭结构，是后两季成人线的中心触发点。", events:[
    ["S03E07","出生过程把 Jean、Otis 和 Jakob 的恐惧集中到一起。",["Jean","Otis","Jakob"]],
    ["S04E01","Jean 的产后压力围绕照顾 Joy 展开。",["Jean","Joanna"]]
  ]}
];

const RELATIONSHIPS = [
  { a:"Otis", b:"Maeve", type:"核心爱情 / 错过与放手", episodes:["S01E01","S01E03","S01E08","S02E08","S03E04","S03E08","S04E04","S04E08"], arc:"从商业搭档到互相看见，再到 repeatedly mistimed love。结尾不是失败，而是两人都承认爱不能替代各自的未来。" },
  { a:"Otis", b:"Eric", type:"核心友情", episodes:["S01E01","S01E05","S01E08","S03E08","S04E08"], arc:"Eric 是 Otis 的情感指南针。友情经历忽视、修复和成年后的重新定界。" },
  { a:"Otis", b:"Jean", type:"母子 / 边界", episodes:["S01E01","S02E01","S03E07","S04E01","S04E08"], arc:"Jean 的专业身份塑造 Otis，也让他反感控制。两人逐渐从互相侵入转向承认需要。" },
  { a:"Otis", b:"Ruby", type:"阶层与脆弱", episodes:["S02E07","S03E01","S03E03","S04E02","S04E08"], arc:"Ruby 让 Otis 看见自己也会伤人。Otis 让 Ruby 打开外壳，但她最终保住自尊。" },
  { a:"Otis", b:"O", type:"职业镜像 / 竞争", episodes:["S04E01","S04E02","S04E05","S04E08"], arc:"O 把 Otis 的治疗师身份变成公共责任问题：不是谁更聪明，而是谁更诚实。" },
  { a:"Maeve", b:"Aimee", type:"女性友谊 / 支持", episodes:["S01E03","S02E03","S02E06","S02E08","S04E08"], arc:"Aimee 给 Maeve 温暖，Maeve 给 Aimee保护和现实感。两人的友谊是全剧最稳定的 chosen family。" },
  { a:"Maeve", b:"Isaac", type:"亲密与控制", episodes:["S02E08","S03E01","S03E04","S03E05"], arc:"Isaac 理解 Maeve 的处境，却用删除 voicemail 越界。关系的价值和伤害同时存在。" },
  { a:"Eric", b:"Adam", type:"爱情 / 成长速度差", episodes:["S01E01","S02E08","S03E02","S03E08"], arc:"从霸凌与吸引的混乱起点，到公开恋爱，再到 Eric 发现不能等待 Adam 慢慢追上。" },
  { a:"Eric", b:"Rahim", type:"安全选择", episodes:["S02E03","S02E08"], arc:"Rahim 代表稳定、成熟、公开，但 Eric 的心仍被 Adam 和自我探索牵动。" },
  { a:"Jean", b:"Jakob", type:"成人亲密 / 信任", episodes:["S01E04","S02E08","S03E07","S03E08"], arc:"他们互相提供稳定与挑战，Joy 和亲子鉴定让信任问题集中爆发。" },
  { a:"Adam", b:"Michael", type:"父子修复", episodes:["S01E01","S03E07","S04E04","S04E08"], arc:"Michael 的权威制造 Adam 的羞耻。失去权力后，他才开始学习怎样做父亲。" },
  { a:"Jackson", b:"Viv", type:"非浪漫伙伴", episodes:["S02E02","S02E05","S03E08","S04E08"], arc:"Viv 帮 Jackson 从成绩压力中脱身，Jackson 也让 Viv 的理性世界进入情感复杂性。" },
  { a:"Jackson", b:"Cal", type:"吸引与身份理解", episodes:["S03E02","S03E06","S03E08","S04E08"], arc:"Cal 让 Jackson 学习性别身份和欲望不能被简化；Jackson 的不成熟也暴露理解的难度。" },
  { a:"Aimee", b:"Isaac", type:"创作与新亲密", episodes:["S04E02","S04E06","S04E08"], arc:"两人从艺术课连接到亲密关系，重点是尊重身体经验和创作边界。" },
  { a:"Ola", b:"Lily", type:"自我发现", episodes:["S02E08","S03E06","S03E08"], arc:"Ola 和 Lily 的关系让两人从被误解的位置转向互相确认。" },
  { a:"Hope", b:"Cal", type:"制度压迫", episodes:["S03E01","S03E02","S03E06"], arc:"Hope 的校服和形象改革集中压迫 Cal，暴露制度如何处理不合规范的身体。" },
  { a:"Viv", b:"Beau", type:"控制型关系", episodes:["S04E03","S04E07","S04E08"], arc:"Beau 的浪漫表象逐步变成控制，Viv 的主线是识别危险并离开。" },
  { a:"Jean", b:"Joanna", type:"姐妹创伤修复", episodes:["S04E01","S04E06","S04E08"], arc:"Joanna 把 Jean 的原生家庭创伤带到现在，最终迫使姐妹从逃避走向承认。" },
  { a:"Eric", b:"Abbi", type:"新 queer 社群", episodes:["S04E01","S04E07"], arc:"Abbi、Roman、Aisha 给 Eric 新社群，也让他看见信仰和 queer 身份可以重新组合。" }
];

const THEMES = [
  { id:"clinic", label:"地下诊所到公共责任", episodes:["S01E01","S02E01","S04E01","S04E08"], note:"Otis 的咨询能力从秘密生意变成需要伦理、边界和透明度的公共角色。" },
  { id:"chosen-family", label:"Chosen family", episodes:["S02E06","S03E08","S04E08"], note:"Maeve/Aimee、Eric 的 Cavendish 圈子、Jean/Joanna 都说明血缘不是唯一支持系统。" },
  { id:"institution", label:"学校制度与身体", episodes:["S03E01","S03E06","S03E07"], note:"Hope 线把性教育、校服、羞辱和声誉政治连成制度冲突。" },
  { id:"leaving", label:"离开不是背叛", episodes:["S03E08","S04E08"], note:"Maeve 去美国、Eric 离开旧式教会想象、Adam 离开传统成功路径，都把离开写成成长。" },
  { id:"trauma", label:"创伤与复原", episodes:["S02E03","S02E06","S04E06"], note:"Aimee、Jean、Joanna、Maeve 的线都把复原写成被陪伴和重新拥有叙述权。" }
];
