export default function Error({ title, message, resolution }) {
  return (
    <div id="error_section" className="error_section  section-1">
      <div className="error_image" id="error_image">
        <img src="./smile.svg" alt="smiley image" />
      </div>
      <h1 id="error_title" className="error_title section-1">
        {title}
      </h1>
      <div id="error_content" className="error_content">
        <div id="error_message" className="error_message">
          {message}
        </div>
        <div id="resolution" className="resolution">
          {resolution}
        </div>
      </div>
    </div>
  );
}
