import * as React from 'react';
import TeamMember from './TeamMember';

const TeamSection: React.FC = () => {
  return (
    <div>
      <h1 className="dsTeam">DenoStore Team</h1>
      <div className="team" id="team">
        <TeamMember
          name="Jake Van Vorhis"
          github="https://github.com/jakedoublev/"
          linkedin="https://www.linkedin.com/in/jakedoublev/"
          picture="https://media-exp1.licdn.com/dms/image/C4E03AQHyl3AaR70Qvw/profile-displayphoto-shrink_800_800/0/1539889311460?e=1654732800&v=beta&t=2hZw6h2B3QVqtdOdHcbgCG3sHWh_9NSGVY79EvWxXzY"
        />
        <TeamMember
          name="James Kim"
          github="https://github.com/jamesmjkim/"
          linkedin="https://www.linkedin.com/in/jamesmjkim/"
          picture="https://media-exp1.licdn.com/dms/image/C5603AQFmC3J19RX5jQ/profile-displayphoto-shrink_800_800/0/1517274087744?e=1654732800&v=beta&t=ghiRolasL91ByItaTS07cQfafGyEwmOWSysB-Xyfuok"
        />
        <TeamMember
          name="Jessica Wachtel"
          github="https://github.com/JessicaWachtel"
          linkedin="https://www.linkedin.com/in/jessicawachtel/"
          picture="https://media-exp1.licdn.com/dms/image/C5603AQHH5ZsoCQSBxA/profile-displayphoto-shrink_800_800/0/1648128285264?e=1654732800&v=beta&t=L5C6R0XpZaRQVbFFgjEe_tEJzSlwOhZfP4rO1JiwSqs"
        />
        <TeamMember
          name="Scott Tatsuno"
          github="https://github.com/sktatsuno/"
          linkedin="https://www.linkedin.com/in/scott-tatsuno/"
          picture="https://media-exp1.licdn.com/dms/image/C5603AQF-WjDWJztc5w/profile-displayphoto-shrink_800_800/0/1537471621408?e=2147483647&v=beta&t=6tnZ2bI4i0vSSY26nBYD2UVkDb4n9Rcuktjj0-zJJ1M"
        />
        <TeamMember
          name="Ting Xian Ho"
          github="https://github.com/lawauditswe"
          linkedin="https://www.linkedin.com/in/sa201034/"
          picture="https://media-exp1.licdn.com/dms/image/C4D03AQF0jRg_RDMG-A/profile-displayphoto-shrink_800_800/0/1650416608025?e=1655942400&v=beta&t=dKxnghFOA-IvUhuHO9FQxz9wipLpmeBdn68YdZxj8PQ"
        />
      </div>
    </div>
  );
};

export default TeamSection;
