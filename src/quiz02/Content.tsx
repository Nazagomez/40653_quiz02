const Content = ({ step }: { step: number }) => {
  let content = null;

  switch (step) {
    case 1:
      content = <div className="card">Step 1 Content</div>;
      break;
    case 2:
      content = <div className="card">Step 2 Content</div>;
      break;
    case 3:
      content = <div className="card">Step 3 Content</div>;
      break;
    default:
      content = <div className="card">Invalid Step</div>;
  }

  return <>{content}</>;
};

export default Content;

