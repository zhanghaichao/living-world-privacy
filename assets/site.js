const translations = {
  navPolicy: "隐私政策", navDelete: "删除数据", eyebrow: "LIVING WORLD · 隐私政策",
  title: "你的世界，始终属于你。", lede: "Living World 不设开发者运营的账号系统，不含广告网络、分析 SDK，也没有应用自建后端。本政策说明天气、可选 AI 创作与 Google Play 订阅所涉及的有限数据。",
  effectiveLabel: "生效日期", effectiveDate: "2026 年 9 月 7 日", appLabel: "应用", packageLabel: "包名", summaryTitle: "简明摘要",
  summaryOneTitle: "无开发者账号", summaryOneBody: "你无需向我们注册账号；我们也不运营服务器来保存你的个人资料或创作。",
  summaryTwoTitle: "位置功能可选", summaryTwoBody: "只有你开启自动天气并授权后，应用才会使用大致位置。",
  summaryThreeTitle: "AI 由你选择", summaryThreeBody: "AI 提示词只发送给你配置的 HTTPS 服务商，API 密钥加密保存在设备上。",
  summaryFourTitle: "无广告或跟踪", summaryFourBody: "应用不含广告或分析 SDK，也不会出售个人数据。",
  dataTitle: "应用使用的数据", optional: "可选", service: "服务", localOnly: "仅限本机", purpose: "用途", retention: "设备内保留", control: "你的控制", sharing: "共享",
  locationTitle: "大致位置与天气", locationBody: "如果你开启自动天气，Android 会提供大致位置。应用将坐标保留两位小数，并通过 HTTPS 发送给 WeatherAPI 以查询当前天气。响应可能包括附近地名、天气状况和观测时间。", locationPurpose: "让壁纸随当地天气变化。", locationRetention: "最近一次坐标和天气响应会缓存到你清除天气数据或卸载应用为止。", locationControl: "关闭自动天气、撤销位置权限，或在应用中使用“清除位置和天气数据”。",
  aiTitle: "AI 提示词、设置与生成图片", aiBody: "开放世界功能只在你填写兼容的 HTTPS 服务商、模型和 API 密钥后工作。已确认的描述与近期创作对话会发送给该服务商，返回的图片会下载到设备。导入照片在本地处理；除非你主动在提示词中写入相关信息，否则不会把原图发送给 AI 服务商。", aiPurpose: "优化场景描述并生成你要求的壁纸。", aiRetention: "服务商设置和密钥使用 Android Keystore 加密，并排除云备份。草稿与作品保留至你删除或卸载应用。", aiControl: "服务商由你选择；你可以清除配置或删除作品。服务商端的数据保留以其政策为准。",
  billingTitle: "Google Play 订阅信息", billingBody: "购买由 Google Play 处理。应用通过 Google Play Billing 查询商品、购买、确认和权益状态，并只在本机保存访问级别与最近检查时间。我们不会接收或保存你的银行卡信息。", billingPurpose: "开通付费世界数量并恢复购买。", billingRetention: "本机权益状态保留至清除应用数据或卸载；Google 适用其自身保留政策。", billingControl: "在 Google Play 中管理或取消订阅。",
  localTitle: "应用设置与创作文件", localBody: "场景选择、动画设置、导入照片、草稿与生成壁纸保存在设备上。照片和 AI 数据被排除在云备份之外。取决于 Android 备份设置，少量非敏感偏好可能包含在操作系统管理的设备备份中。", localPurpose: "记住你的壁纸与应用偏好。", localSharing: "我们不会共享。只有你通过 Android 系统文件选择器选择导出目标时才会导出。", localControl: "重置设置、删除作品、清除应用数据或卸载应用。",
  sharingTitle: "数据何时离开设备", sharingBody: "我们不会出售个人数据。只有为提供你选择的功能时，数据才会离开设备：", sharingWeather: "WeatherAPI：开启自动天气后，会收到大致坐标与请求元数据。", sharingAi: "你选择的 AI 服务商：会收到完成请求所需的提示词、近期创作上下文、模型名称和 API 凭据。", sharingGoogle: "Google Play：处理订阅购买，并可能根据 Google 政策处理设备、账号和交易信息。", providerNotice: "这些服务商依据各自的条款和隐私政策处理信息。请在选择 AI 服务商前查看其数据做法。",
  securityTitle: "安全与保留期限", securityBody: "网络请求使用 HTTPS。AI 凭据使用 Android Keystore 持有的密钥进行静态加密。敏感应用文件与天气缓存被排除在云备份之外。任何存储或传输方式都无法保证绝对安全，因此我们把数据使用限制在本政策描述的功能内。", retentionBody: "由于 Living World 没有开发者运营的后端，开发者不会保存服务器端副本。设备内数据会保留到你使用相应控制、清除应用数据或卸载为止；第三方自行规定其保留期限。",
  rightsTitle: "你的选择与删除", rightsBody: "你可以不提供位置并使用手动天气，在 Android 设置中拒绝或撤销位置权限，清除天气缓存与 AI 凭据，删除自定义世界，在 Google Play 管理订阅，或通过卸载删除全部本地应用数据。", deletionLink: "查看数据删除指南 →",
  childrenTitle: "儿童隐私", childrenBody: "Living World 不面向 13 岁以下儿童（或所在国家/地区规定的最低年龄），我们也不会故意收集儿童个人信息。如果你认为儿童通过本应用所使用的第三方服务提供了信息，请联系该服务商及我们。",
  changesTitle: "政策更新", changesBody: "当应用功能或法律要求变化时，我们可能更新本政策。最新版会继续发布在此网址，并标明新的生效日期；重大变化会在适当情况下通过应用或商店列表说明。",
  contactEyebrow: "问题或隐私请求", contactTitle: "联系开发者。", developer: "开发者", email: "邮箱", weatherNoteTitle: "天气信息提示", weatherNoteBody: "天气信息仅供一般参考，特定地点或时段的状况可能不确定或不准确。请勿把本应用作为安全关键决策的唯一依据；涉及人身安全时，请查询官方气象服务及有关部门。",
  deleteEyebrow: "数据控制", deleteTitle: "删除你的 Living World 数据。", deleteLede: "Living World 不创建开发者账号，也不会把你的数据保存在开发者运营的服务器上。你可以直接从 Android 设备删除数据。",
  deleteWeatherTitle: "位置与天气缓存", deleteWeatherBody: "打开 Living World → 设置 → 天气 → 清除位置和天气数据。此操作也会关闭自动天气。你还可以前往 Android 设置 → 应用 → Living World → 权限，单独撤销位置权限。",
  deleteAiTitle: "AI 服务商凭据", deleteAiBody: "打开 Living World → 设置 → AI 服务商设置，然后清除已保存配置。设备上的加密端点、模型名称与 API 密钥会被删除。若要删除服务商已处理的数据，请联系你选择的服务商。",
  deleteWorldTitle: "自定义世界与图片", deleteWorldBody: "打开“我的世界”，选择作品并点击移除。导出的副本由你选择的目标位置管理，需要在相应位置单独删除。",
  deleteAllTitle: "删除全部本地应用数据", deleteAllBody: "前往 Android 设置 → 应用 → Living World → 存储 → 清除存储，或卸载 Living World。Android 会删除应用的本地设置、缓存、凭据和作品。",
  deleteBillingTitle: "Google Play 订阅数据", deleteBillingBody: "订阅属于你的 Google Play 账号，清除应用数据不会取消订阅。打开 Google Play → 付款和订阅 → 订阅，即可管理或取消。对于 Google 保存的数据，请使用 Google 的隐私控制。",
  deleteHelpEyebrow: "需要帮助？", deleteHelpTitle: "Living World 没有需要删除的服务器端账号。", deleteHelpBody: "如对上述步骤有疑问，请联系", backPolicy: "← 返回隐私政策"
};

const english = new Map();
document.querySelectorAll("[data-i18n]").forEach((node) => english.set(node, node.innerHTML));

function setLanguage(language) {
  const chinese = language === "zh-CN";
  document.documentElement.lang = chinese ? "zh-CN" : "en";
  document.title = chinese
    ? (location.pathname.includes("data-deletion") ? "删除你的数据 · Living World" : "隐私政策 · Living World")
    : (location.pathname.includes("data-deletion") ? "Delete Your Data · Living World" : "Privacy Policy · Living World");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.innerHTML = chinese && translations[key] ? translations[key] : english.get(node);
  });
  const button = document.querySelector(".language");
  button?.setAttribute("aria-pressed", String(chinese));
  localStorage.setItem("living-world-language", chinese ? "zh-CN" : "en");
}

const preferred = localStorage.getItem("living-world-language") || (navigator.language.startsWith("zh") ? "zh-CN" : "en");
setLanguage(preferred);
document.querySelector(".language")?.addEventListener("click", () => setLanguage(document.documentElement.lang === "zh-CN" ? "en" : "zh-CN"));
