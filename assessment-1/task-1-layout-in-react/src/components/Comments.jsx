const comments = [
  { user: 'soundseeker92', text: "This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?" },
  { user: 'Ted Baker', text: "I've been following the label for years—so glad someone's finally writing about their impact." },
  { user: 'Queen_of_noise', text: 'I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories and be and my friends listening together. A bit too poetic for my taste, but still compelling.' },
];

export default function Comments() {
  return (
    <section className="comments" id="comments">
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div className="comment" key={comment.user}>
          <h3>{comment.user}</h3>
          <p>{comment.text}</p>
        </div>
      ))}
    </section>
  );
}
