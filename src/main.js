import "./styles/main.scss";

const app = document.getElementById("app");

app.innerHTML = `
  <div class="page">
    <header class="hero">
      <div class="hero__top">
        <span class="logo">一林</span>
        <nav class="nav">
          <a href="#about">关于我</a>
          <a href="#experience">经历</a>
          <a href="#skills">技能</a>
          <a href="#projects">作品</a>
          <a href="#contact">联系</a>
        </nav>
      </div>
      <div class="hero__content">
        <div class="avatar"></div>
        <div class="intro">
          <p class="tagline">你好呀，我是</p>
          <h1>一林</h1>
          <p class="subtitle">10年+金融IT程序员 · 低风险投资践行者 · AI项目实践者</p>
          <p class="description">5年资深的数据分析/系统集成经验，AI项目落地经验丰富，擅长ToB业务设计、协同合作，持续探索增长与分享。</p>
          <div class="hero__actions">
            <a class="btn primary" href="#projects">作品</a>
            <a class="btn secondary" href="#contact">联系</a>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section id="about" class="section about">
        <h2>关于我</h2>
        <p>成长型金融人，10年+金融IT从业经验，拥有丰富的金融数据风控经验和AI项目实践经验，目前持续探索低风险投资策略。坚持自我迭代与终身学习。</p>
        <div class="about__grid">
          <article class="card">
            <h3>以终为始，系统构建</h3>
            <p>关注终局结果，强调系统思维。善于从终局倒推规划路径，拆解节点，明确优先级。</p>
          </article>
          <article class="card">
            <h3>AI落地能力，复盘沉淀</h3>
            <p>AI项目（TBI）落地经验，擅长从需求梳理到上线、迭代与复盘。拥有多个不同场景的 agent builder 项目实践。</p>
          </article>
          <article class="card">
            <h3>跨团队协作，解决方案</h3>
            <p>具备跨部门沟通协调能力，推动产品交付落地。能快速理解业务诉求，匹配可行的技术方案。</p>
          </article>
          <article class="card">
            <h3>成长心态，持续记录</h3>
            <p>坚持知识整理与复盘，撰写案例分享，维护公众号与知识库，持续输出行业洞察。</p>
          </article>
        </div>
      </section>

      <section id="experience" class="section timeline">
        <h2>经历</h2>
        <ol class="timeline__list">
          <li>AI项目落地探索</li>
          <li>低风险投资践行</li>
          <li>10年+金融IT程序员</li>
        </ol>
      </section>

      <section id="skills" class="section skills">
        <h2>技能</h2>
        <div class="skills__grid">
          <div class="skills__group">
            <h3>工作技能</h3>
            <ul>
              <li>分析力</li>
              <li>复盘力</li>
              <li>逻辑思维</li>
              <li>项目管理</li>
              <li>跨团队协作</li>
            </ul>
          </div>
          <div class="skills__group">
            <h3>低风险投资</h3>
            <ul>
              <li>可转债组合</li>
              <li>可转债ETF套利</li>
              <li>LOF折价</li>
              <li>指数增强</li>
            </ul>
          </div>
          <div class="skills__group">
            <h3>金融数据分析</h3>
            <ul>
              <li>中证500</li>
              <li>ETF</li>
              <li>LOF</li>
              <li>货币基金</li>
            </ul>
          </div>
          <div class="skills__group">
            <h3>AI探索</h3>
            <ul>
              <li>AI落地项目</li>
              <li>Agent Builder</li>
              <li>知识库搭建</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" class="section projects">
        <h2>作品</h2>
        <div class="projects__grid">
          <article class="project">
            <div class="project__preview project__preview--tech"></div>
            <h3>Tech Insights & Best Practices</h3>
            <p>分享技术实践经验，数据分析洞察，以及如何打造稳健系统的策略。</p>
            <div class="project__actions">
              <a href="#" class="link">详细了解</a>
              <a href="#" class="link">阅读</a>
            </div>
          </article>
          <article class="project">
            <div class="project__preview project__preview--path"></div>
            <h3>像之路</h3>
            <p>记录个人认知升级，复盘成长轨迹，梳理可复制的方法论。</p>
            <div class="project__actions">
              <a href="#" class="link">案例</a>
              <a href="#" class="link">阅读</a>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="section contact">
        <h2>联系我</h2>
        <div class="contact__grid">
          <div class="qrcode" aria-label="WeChat QR code"></div>
          <div class="qrcode qrcode--alt" aria-label="Weibo QR code"></div>
        </div>
        <p class="contact__note">扫码添加好友 · 合作交流</p>
      </section>
    </main>

    <footer class="footer">&copy; 2025 一林，保留所有权利。</footer>
  </div>
`;
