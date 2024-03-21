import "./DetailTeam.css";
const DetailTeam = () => {
  return (
    <section className="container">
          <h1 className="team-name montserrat">ARSENAL</h1>
        <div className="header-flex">
          <div className="team-infos">
            <p className="detail-headline montserrat"> England</p>
            <p className="detail-text opensans">Country</p>
            <p className="detail-headline montserrat">Holloway, London</p>
            <p className="detail-text opensans">Location</p>
            <p className="detail-headline montserrat">1892</p>
            <p className="detail-text opensans">Established</p>
            <p className="detail-headline montserrat">Soccer</p>
            <p className="detail-text opensans">Sport</p>
          </div>
        <div className="team-img">
          <img src="https://cdn.discordapp.com/attachments/1176890609542385764/1220380975985332265/w1anwa1588432105_1.png?ex=660ebb5a&is=65fc465a&hm=42d262ae8c46d99b03b2daa3fc9870490157dce9c5604549accbdcb697c89fbd&" alt="Image" />
        </div>
      </div>
      <div className="comp opensans">
        <div>
          <p className="detail-text">COMPETITION</p>
        </div>
        <div>
          <p className="detail-comp-text">ENGLISH PREMIER LEAGUE</p>
          <p className="detail-comp-text">UEFA EUROPA LEAGUE</p>
          <p className="detail-comp-text">FA CUP</p>
          <p className="detail-comp-text">EFL CUP</p>
          <p className="detail-comp-text">FA COMMUNITY SHIELD</p>
        </div>
      </div>
      <div className="desc">
        <div>
        <h2 className="desc-title">DESCRIPTION</h2>
        </div>
        <div className="desc-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veritatis at blanditiis illum nisi! Dolor illo quas, eos fugiat voluptatum similique consectetur impedit voluptas quo molestias corporis suscipit ipsa quasi?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, illo! Iure autem quidem atque tempora, voluptates aut dolorum asperiores nihil voluptate a unde maiores nulla quis laborum, neque sapiente eius.</p>
        </div>
      </div>
    </section>
  )
};

export default DetailTeam;
