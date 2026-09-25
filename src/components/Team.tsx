import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const toggleExpand = (name: string) => {
    setExpandedMember(expandedMember === name ? null : name);
  };

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-bark-copper">Our People</span>
          <h2 className="text-5xl font-serif text-neutral-900">Meet the Team</h2>
          <p className="max-w-2xl mx-auto text-neutral-500 text-lg leading-relaxed">
            Our talented team of stylists bring passion, expertise, and creativity to every appointment. Get to know the people who make <span className="font-bark">Bark Hair</span> special.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => {
            const isExpanded = expandedMember === member.name;
            return (
              <div key={member.name} className="group bg-bark-pink/30 rounded-[40px] overflow-hidden hover:shadow-xl transition-all duration-500">
                {/* Team member photo */}
                <div className="aspect-square bg-bark-cream/30 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-white/50 flex items-center justify-center">
                      <span className="text-4xl font-bark text-bark-copper">{member.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-neutral-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-bold tracking-widest uppercase text-bark-copper mb-4">{member.title}</p>

                  {/* Description - shows short when collapsed, long when expanded */}
                  <p className="text-neutral-500 leading-relaxed mb-4">
                    {isExpanded ? member.longDescription : member.shortDescription}
                  </p>

                  {/* Expand/Collapse button */}
                  <button
                    onClick={() => toggleExpand(member.name)}
                    className="flex items-center gap-2 text-sm font-medium text-bark-copper hover:text-bark-copper/70 transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <span>Read less</span>
                        <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        <span>Read more</span>
                        <ChevronDown size={16} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
