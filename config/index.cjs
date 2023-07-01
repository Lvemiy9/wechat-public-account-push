/* eslint-disable */
const USER_CONFIG = {
  /**
   * 基本配置
   */
  
  // 使用的推送通道：['push-deer', 'wechat-test', 'server-chan', 'push-plus']
  // 默认使用 【微信测试号】
  // 使用【pushDeer】请填写 push-deer
  // 使用【微信测试号】请填写 wechat-test
  // 使用【方糖服务号】请填写 server-chan
  // 使用【pushplus推送加服务号】请填写 push-plus
  USE_PASSAGE: 'wechat-test',
  
  // 使用微信测试号时才需要填写：公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: 'wx9c7340165b932632',

  // 使用微信测试号时才需要填写：公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: '726803d641a3078def31b081971068b4',
  
  // 为了避免推送服务器误将脚本列为恶意推送脚本，可设置每分钟脚本最大推送数
  // 每分钟脚本最大推送数，超过此数将会休眠1分钟后再发送剩余消息，不填则默认为5
  // 此项不建议随意修改
  MAX_PUSH_ONE_MINUTE: 5,
  // 配合MAX_PUSH_ONE_MINUTE使用，休眠<SLEEP_TIME>毫秒后再发送剩余消息，不填则默认为65000
  SLEEP_TIME: 65000,

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: false,
    
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: false,
    
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,
    
    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: false,
    
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: false,
    
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: false,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: false,
  
    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: false,
  },
  
 //
    TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '5f5fb5991edc3152382c27da42380959',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: true,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 1,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 3,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'title',
  },
  
  /** 是否给文字设置多彩颜色, 和emoji不兼容 */
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,
  
  /** 每日一言 */
  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: '',
  

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // 使用其他通道时，请严格按照各个通道的教程进行填写
      id: 'oQMeP6XpDQfBHFAOGtQOxygXMg0w',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      // 使用其他通道时，请填写 config/template-config.cjs 中某个想要使用的模板的id
      useTemplateId: '2cpxN5OhjL1LaMTNvFaoK5fCiPvOei4v3PXPwenVQXo',
      // 所在省份或城市，也可以不填
      province: '辽宁',
      // 所在城市或县区
      city: '抚顺市',
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '05-03',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: 'https://tophub.today/n/KqndgxeLl9',
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '老婆', year: '2002', date: '03-21',
        },
        {
         // type: '节日', name: '结婚纪念日', year: '2020', date: '09-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
         // type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
         // type: '节日', name: '被搭讪纪念日', year: '2021', date: '09-01',
        }
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-05-20' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
        // 退伍日
        //{ keyword: 'ex_day', date: '2022-09-10' }
      ],
      // 课程表相关配置
      // 如果courseSchedule不存在或者为空（null）则认为没有课程
      // 如果courseSchedule是一个数组，则认为不区分单双周，直接填写星期几对应的课表数据即可
      // 如果courseSchedule是一个对象（如下面所示）
      courseSchedule: {
        // 单双周的基准
        benchmark: {
          // 这里设置一个日期，用来作为判断课表是否单双周的依据
          date: '2022-09-23',
          // 该日期是否为单周
          isOdd: true
        },
        // 课表
        courses: {
          // 单周课表
          // 从星期一到星期日（星期六和星期日的课表数组可不填写）
          odd: [
            // 例子，周一的课表
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周二
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周三
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周四
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周五
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周六
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周日
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ]
          ],
          // 双周课表
          even: [
            [],
            [],
            [],
            [],
            [],
            [],
            []
          ]
        }
      },
    },
    {
      
      // 想要发送的人的名字
      name: '自己',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // 使用其他通道时，请严格按照各个通道的教程进行填写
      id: 'oQMeP6c-v9i4TgTraGq6jU2cu_ho',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      // 使用其他通道时，请填写 config/template-config.cjs 中某个想要使用的模板的id
      useTemplateId: '2cpxN5OhjL1LaMTNvFaoK5fCiPvOei4v3PXPwenVQXo',
      // 所在省份或城市，也可以不填
      province: '宁夏',
      // 所在城市或县区
      city: '银川市',
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '05-03',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: 'https://tophub.today/n/KqndgxeLl9',
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '老婆', year: '2002', date: '03-21',
        },
        {
         // type: '节日', name: '结婚纪念日', year: '2020', date: '09-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
         // type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
         // type: '节日', name: '被搭讪纪念日', year: '2021', date: '09-01',
        }
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-05-20' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
        // 退伍日
        //{ keyword: 'ex_day', date: '2022-09-10' }
      ],
     }, 
    {
      name: '老婆2',
      id: '',
      useTemplateId: '',
      province: '',
      city: '',
      horoscopeDate: '',
      horoscopeDateType: '',
      openUrl: 'https://wangxinleo.cn',
      festivals: [],
      customizedDateList: [],
      courseSchedule: null
    },
    {
      name: '老婆3',
      id: '',
      useTemplateId: '',
      province: '',
      city: '',
      horoscopeDate: '',
      horoscopeDateType: '',
      openUrl: 'https://wangxinleo.cn',
      festivals: [],
      customizedDateList: [],
      courseSchedule: null
    }
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 使用微信测试号：【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  // 使用其他通道时，请填写 config/template-config.cjs 中【推送完成提醒】模板的id
  CALLBACK_TEMPLATE_ID: 'Q-RPxI6wErJ_LPJuIN6WT9TnACyRKJgStsibNn250Ck',

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // 使用其他通道时，请严格按照各个通道的教程进行填写
      id: 'oQMeP6XpDQfBHFAOGtQOxygXMg0w',
    }
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 信息配置
   */

  /** 
   * 天气相关
   * 
   * 可以填 省份或者市区， PROVINCE 的区域必须包含 CITY
   * 例如： PROVINCE：'广东' CITY：'惠州'
   * 例如： PROVINCE：'咸阳' CITY：'长武'
   *
   * 甚至 PROVINCE 可以不填
   * 例如： PROVINCE：'' CITY：'长武'
   * */
  
  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: '辽宁',
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: '抚顺市',

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一!
   *
   * --- 阴历配置开始 ---
   * 如果日期使用阴历，请在 “生日” 或 "节日“ 前添加 * 符号
   * --- 阴历配置结束 ---
   *
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   *
   * --- 是否展示周岁信息开始 ---
   * isShowAge: true 展示岁数, 仅type为生日生效
   * isShowAge: false 不展示岁数, 仅type为生日生效
   * 删除isShowAge属性，也会不展示岁数
   * --- 是否展示周岁信息结束 ---
   */
  FESTIVALS: [
    // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
    {
      type: '*生日', name: '老婆', year: '1996', date: '09-09', isShowAge: true,
    },
    {
      type: '节日', name: '结婚纪念日', year: '2020', date: '09-03',
    },
    // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
    {
      type: '生日', name: '李四', year: '1996', date: '09-31', isShowAge: true,
    },
    {
      type: '节日', name: '被搭讪纪念日', year: '2021', date: '09-01',
    }
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
   * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
   * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
   * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    { keyword: 'love_day', date: '2023-05-20' },
    // 结婚纪念日
   // { keyword: 'marry_day', date: '2022-09-09' },
    // 退伍日
   // { keyword: 'ex_day', date: '2022-09-10' }
    // 你可以不断按格式往下增加
    // ...
  ],
  
  // 默认的课表配置
  COURSE_SCHEDULE: null,

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
   * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
   * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
   * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    { keyword: 'encourage_oneself', contents: '你主要的问题在于读书太少而想得太多' },
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: 'lover_prattle',
      contents: [
        '你别凶我,我会叫玛卡巴卡开车撞你的!',
        '什么时候才能睡觉一翻身就能蹭到你怀里吖!',
        '你稍微记一下哦，我找你的时候是爆炸想你，没有找你的时候是憋着在想你',
        '我是个小无赖会一直赖在你心里的啦',
        '我奔月失败了，因为人间有你~',
        '我给你科普一下油的不同种类,地沟油，菜籽油，橄榄油，我爱你油',
        '给你科普一下辣的级别∶微辣、中辣、特辣、变态辣、我想你辣',
        '我给你科普一下鸭子的种类，可达鸭,小黄鸭，扁嘴鸭，我想你了鸭',
        '你知道吗?  咱俩都挺过分的，你尔过分美丽，我过分着迷',
        '我的身体很好，可以扛米袋子，可以扛煤气，但是扛不住想你！',
        '今天穿了一双老是想去找你的鞋哎',
        '我想送你一个让你非常喜欢的礼物，可是邮递员不让我待在纸箱子里，好气哦',
        '想见你只想见你，未来过去，我只想见你，穿越了千个万个，时间线里，人海里相遇～',
        '虽然我不是奥利奥，但是也可以泡一泡',
        '乍见心欢，小别思恋，久处仍怦然',
        '你啊，困了睡，不困我陪你，你醒了就给我发消息',
        '你是落日弥漫的橘，天边透亮的星',
        '无论这个世界怎么刻薄，我都偏爱你',
        '有幸相遇，恰好合拍',
        '我不仅可爱，还可爱你了呢',
        '只愿君心似我心，定不负相思意',
        '天涯地角有穷时，只有相思无尽处',
        '此生固短，无你何欢',
        '人间纵有百媚千红，唯独你是情之所钟',
        '我愿提笔画尽天下，许你一世繁华',
        '入目无别人，四下皆是你',
        '红笺小字，说尽平生意',
        '即见君子，云胡不喜',
        '南风知我意，吹梦到西洲',
        '任凭弱水三千，我只取一瓢饮',
        '原为西南风，长逝入君怀',
        '浮世三千，吾爱有三，日月与卿，日为朝，月为暮，卿为朝朝暮暮',
        '我用手去触摸你的眼睛，太冷了，倘若你的眼这样冷，有个人的心会结冰',
        '晚霞鱼玫瑰共绘浪漫，你是我心底的爱意泛滥',
        '不用担心长路漫漫，同行的人永远不会走散',
        '世上繁华种种，唯有你无可代替',
        '浪漫不是四季，而是你在我身边',
        '万物想你不及我心念你，万物喜你不及我心悦你',
        '人生只有两次幸运就好，一次遇见你，一次走到底',
        '所珍重的事物实在太少，不过你在其中，名列前茅',
        '我会在心动的期限里无限期的喜欢你。你是我难以预料的惊喜，也是我来日方长的温柔',
        '日落是免费的，春夏秋冬也是，不要觉得人生那么无望，希望你快乐',
        '晚霞鱼玫瑰共绘浪漫，你是我心底的爱意泛滥',
        '有什么问题都可以吻我'
        '有幸相遇，恰好合拍',
      ],
    }
    // 你可以不断按格式往下增加
    // ...
  ],
}

module.exports = USER_CONFIG

