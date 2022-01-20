export const setFileUpload = async (file) => {
  const cloud_name = "dx56hloxw";
  const api_key = "247626114112781";
  const upload_preset = "react-journal-app";
  const public_id = new Date().getTime()
  const cloudUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

  const formData = new FormData();
  formData.append("upload_preset", upload_preset);
  formData.append("api_key", api_key);
  formData.append("public_id", public_id);
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    console.log(error);
  }
};
