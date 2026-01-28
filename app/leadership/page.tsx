import { Section } from "@/components/Section";

export default function LeadershipPage() {
  return (
    <div className="space-y-10">
      <Section title="Leadership & community" eyebrow="Service">
        <p>
          I am committed to student representation, mentoring, and community building.
          I have served as an academic representative at both Cambridge and UCL and
          have held multiple roles in student societies.
        </p>
      </Section>

      <Section title="Formal representation">
        <ul className="space-y-3 text-sm md:text-base text-slate-300 list-disc list-inside">
          <li>
            <strong>University of Cambridge Students&apos; Union</strong> — Academic
            Representative of the Physics Department and member of the Council of the
            School of Physical Sciences.
          </li>
          <li>
            <strong>UCL Students&apos; Union</strong> — Student Academic Representative
            and Deputy Lead Representative for the Electronic and Electrical
            Engineering Department.
          </li>
        </ul>
      </Section>

      <Section title="Societies, mentoring, and events">
        <ul className="space-y-3 text-sm md:text-base text-slate-300 list-disc list-inside">
          <li>
            Events Executive in the UCL Engineering Society, Head of Hackathon in the
            Technology Society, and Head of Event in the Fleming Society, helping to
            organise technical workshops, hackathons, and conferences.
          </li>
          <li>
            Transition mentor for first-year undergraduates at UCL, supporting students
            with academic and pastoral issues during their first year.
          </li>
          <li>
            Participation in student-led AI research and discussion spaces, as well as
            membership in the Cambridge Union and other co-curricular activities such
            as hiking and fencing.
          </li>
        </ul>
      </Section>
    </div>
  );
}
