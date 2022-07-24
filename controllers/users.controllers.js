
const getUsuario = (req, res) => {
    const query = req.query
  res.json({
    ok: true,
    message: "wena ",
    params: query
  });
};
const putUsuario = (req, res) => {

    const id = req.params.id
  res.json({
    ok: true,
    message: "put ",
    params : id
  });
};
const postUsuario = (req, res) => {
  res.status(201).json({ ok: true, params : req.body });
};

const deleteUsuario = (req, res) => {
  res.json({
    ok: true,
    message: "delete ",
  });
};

module.exports = {
  getUsuario,
  putUsuario,
  postUsuario,
  deleteUsuario,
};
