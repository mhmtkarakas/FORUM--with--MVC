import Header from "../../components/Header";

const AddPostView = ({ onInputChange }) => (
  <>
    <Header addLink />
    <form>
      <fieldset>
        <label htmlFor="">Kullanici Adi</label>
        <input
          onChange={(e) => onInputChange("user", e.target.value)}
          type="text"
          placeholder="Kullanici adi giriniz"
        />
      </fieldset>

      <fieldset>
        <label htmlFor="">Baslik:</label>
        <input 
        onChange={(e) => onInputChange("title", e.target.value)}
        type="text" placeholder="Kullanici adi giriniz" />
      </fieldset>

      <fieldset>
        <label htmlFor="">Text:</label>
        <textarea 
        onChange={(e) => onInputChange("text", e.target.value)}/>
      </fieldset>

      <button>Gonder</button>
    </form>
  </>
);

export default AddPostView;
