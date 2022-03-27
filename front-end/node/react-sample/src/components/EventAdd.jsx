import React from "react";

function Header() {
  return (
      <div>
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Place:
                <input type="text" name="place" />
            </label>
            <label>
                Location:
                <input type="text" name="location" />
            </label>
        </form>
        <div>
            <input type="submit" value="Submit" />
        </div>
      </div>
  );
}

export default Header;