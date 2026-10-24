const profile = {
  name: '缪东旭',
  alias: 'MiaoDX',
  intro: '机器人系统技术负责人，从自动驾驶量产系统走到机器人完整任务。',
  focus: [
    '机器人系统交付',
    '具身模型微调与真机适配',
    '数据评测',
    '受控 Agent 执行',
  ],
}

const education = [
  {
    period: '2016–2018',
    school: '天津大学',
    role: '软件工程硕士',
    detail: '主动视觉与机器人方向',
  },
  {
    period: '2012–2016',
    school: '西安电子科技大学',
    role: '软件工程本科',
    detail: '',
  },
]

const experience = [
  {
    period: '2025.03–2026.10',
    company: '小米汽车机器人实验室',
    role: '高级算法工程师',
    detail: '整机系统集成、模型部署与真机适配',
  },
  {
    period: '2021.08–2025.03',
    company: '小米汽车自动驾驶部',
    role: '感知系统团队负责人',
    detail: '从 0 到 1 组建感知系统团队，负责量产交付',
  },
  {
    period: '2019.03–2021.07',
    company: 'DeepMotion.ai',
    role: '算法工程师',
    detail: '自动驾驶与泊车算法，泊车合作项目交付负责人',
  },
]

const projects = [
  {
    name: 'RoboClaws',
    description: '面向机器人开放任务的受控执行框架',
  },
  {
    name: 'RoboHarness',
    description: '面向机器人研发 Agent 的仿真测试与验收框架',
  },
  {
    name: 'intuitive-flow',
    description: '把 Agent 软件工程方法整理成稳定流程的开源总结',
  },
]

export default function App() {
  return (
    <>
      <header className="hero">
        <h1 className="hero__name">
          {profile.name}
          <span className="hero__alias">{profile.alias}</span>
        </h1>
        <p className="hero__intro">{profile.intro}</p>
        <p className="hero__focus-label">现在关注</p>
        <ul className="hero__focus-list">
          {profile.focus.map((item) => (
            <li className="hero__focus-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <a className="hero__action" href="#experience">
          查看经历
        </a>
      </header>

      <section className="section" id="education" aria-labelledby="education-title">
        <h2 className="section__title" id="education-title">
          教育
        </h2>
        <ul className="entries">
          {education.map((item) => (
            <li className="entry" key={`${item.period}-${item.school}`}>
              <p className="entry__period">{item.period}</p>
              <div className="entry__body">
                <h3 className="entry__title">
                  {item.school}
                  <span className="entry__role">{item.role}</span>
                </h3>
                {item.detail ? <p className="entry__detail">{item.detail}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" id="experience" aria-labelledby="experience-title">
        <h2 className="section__title" id="experience-title">
          工作经历
        </h2>
        <ul className="entries">
          {experience.map((item) => (
            <li className="entry" key={`${item.period}-${item.company}`}>
              <p className="entry__period">{item.period}</p>
              <div className="entry__body">
                <h3 className="entry__title">
                  {item.company}
                  <span className="entry__role">{item.role}</span>
                </h3>
                <p className="entry__detail">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" id="projects" aria-labelledby="projects-title">
        <h2 className="section__title" id="projects-title">
          项目与开源
        </h2>
        <ul className="projects__list">
          {projects.map((project) => (
            <li className="project-card" key={project.name}>
              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__description">{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
