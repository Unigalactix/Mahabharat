
import React from 'react';
import { CHARACTERS } from './constants';
import Header from './components/Header';
import Section from './components/Section';
import CharactersSection from './components/CharactersSection';
import Timeline from './components/Timeline';
import FamilyTree from './components/FamilyTree';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 antialiased">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Section title="Executive Summary: A War of Total Societal Convulsion">
          <p className="text-lg leading-relaxed mb-4">
            This compendium serves as a comprehensive reference on the participants of the Kurukshetra War, meticulously cataloging the individuals, their allegiances, and their ultimate destinies. Moving beyond the principal figures, it delves into the complex network of sons, half-brothers, gurus, and allied kings integral to the conflict.
          </p>
          <p className="text-lg leading-relaxed">
            The war was not merely a clash of armies but a total societal convulsion, where almost every named participant, regardless of their station or dharma (righteous duty), met a grim fate. The narrative reveals a profound theme: the inevitability of consequence and the tragic paradox of duty in a war defined by its violation.
          </p>
        </Section>

        <Section title="The Kuru-Bharata Dynasty">
          <FamilyTree />
        </Section>

        <Section title="Key Participants in the War">
          <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
            From the hundred Kaurava brothers to the many sons of the Pandavas, the war involved a vast network of individuals. Explore the key combatants, grandsires, gurus, and allies whose choices and fates defined the epic conflict. Click a card to learn more.
          </p>
          <CharactersSection characters={CHARACTERS} />
        </Section>

        <Section title="Part III: The 18-Day Kurukshetra War">
           <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            A day-by-day chronicle of the monumental conflict that stands at the heart of the epic. The war saw the tragic deaths of revered patriarchs, the violation of the rules of combat, and the near-total annihilation of the Kuru and Pandava's next generation.
          </p>
          <Timeline />
        </Section>
        
        <Section title="Conclusion: A War of Annihilation">
            <div className="text-center max-w-4xl mx-auto text-lg leading-relaxed">
                <p className="mb-4">
                    The epic’s narrative structure demonstrates a profound chain of causality. Acts of unrighteousness, such as the disrobing of Draupadi and the deceitful killing of Abhimanyu, set off a cascade of vengeance and further violations of dharma. The deaths of Drona and Bhishma, accomplished through deceit and a breach of honor, serve as a testament to the war's corrupting influence.
                </p>
                <p>
                    Ultimately, the war concludes with a near-total annihilation of the ruling generation. The survival of only a handful of individuals leaves the continuation of the lineage to an unborn child, Parikshit. This final act symbolizes that the future of a world ravaged by conflict must be built by a generation unburdened by the memory and trauma of the carnage. The epic's central message is thus a somber warning about the ultimate cost of conflict, where victory can feel as devastating as defeat.
                </p>
            </div>
        </Section>
      </main>
      <footer className="text-center py-8 border-t border-slate-800 text-slate-500">
        <p>An Interactive Exploration of the Mahabharata</p>
      </footer>
    </div>
  );
};

export default App;
