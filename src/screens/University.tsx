import * as React from "react";

import AddButton from "../components/AddButton";
import Form from "../common/Form";
import List from "../common/List";
import Modal from "../components/Modal";
import SideMenu from "../components/SideMenu";
import useUniversityStore from "../store/UniversityStore";

type props = {
  history: any;
  location: any;
  match: any;
  onToggle: () => void;
};

const Products: React.FunctionComponent<props> = ({
  history,
  location,
  match,
  onToggle,
}) => {
  const {
    university,
    handleUniversity,
    isOpenModal,
    isEdit,
    list,
    handleEdit,
    handleModal,
    getUniveristy,
    Loading,
    createUniversity,
  } = useUniversityStore();

  React.useEffect(() => {
    getUniveristy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = () => {
    if (list.length === 0) return;
    return list.map((item: any, index: number) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{item.name ? item.name : item.Name}</td>
          <td>{item.logo}</td>
          <td>
            <button
              className="btn btn-secondary"
              onClick={(e) => handleEdit(index)}
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <section id="product">
      <SideMenu onToggle={onToggle} />
      <h1>University</h1>
      <AddButton item={"University"} handleModal={handleModal} />
      {Loading ? (
        <h1>loading</h1>
      ) : (
        <List tableHeading={university} getData={getData} />
      )}
      {isOpenModal ? (
        <Modal
          backgroundColor={"#fff"}
          height={"90%"}
          width={"60%"}
          heading={"Form"}
          handleModal={handleModal}
        >
          <Form
            onSubmit={(e) => {
              isEdit === true ? handleEdit(23) : createUniversity(e);
            }}
            item={university}
            handleChange={handleUniversity}
          />
        </Modal>
      ) : null}
    </section>
  );
};

export default Products;
