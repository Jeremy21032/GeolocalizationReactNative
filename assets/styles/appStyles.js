import { StyleSheet } from "react-native";


export const colors = {
  principalGreen: "#00C7B1",
  redColor: "#FF0000",
  grayColor: "#808080",
  desabledButton: "#212121",
  aceptarModalButton: "#2196F3",
  colorTransparent: "transparent",
  whiteColor: "#FFFFFF",
};

export const commons = StyleSheet.create({
  principalContainer:{
    backgroundColor: "#fff",
    flex:1
  },
  actionButton: {
    backgroundColor: colors.principalGreen,
    borderColor: colors.colorTransparent,
    borderWidth: 0,
    borderRadius: 20,
  },
  actionButtonCancel:{
    backgroundColor: colors.redColor,
    borderColor: colors.colorTransparent,
    borderWidth: 0,
    borderRadius: 20,
  },
  textHeader: {
    textAlign: "center",
    padding: 5,
    color: colors.redColor,
    fontSize: 24,
    marginVertical: 30,
  },
  txtmsg: {
    color: colors.grayColor,
    marginVertical: 10,
  },
  buttonContent: {
    width: 200,
  },
  buttonModalContent:{
    width: 200,
    marginVertical: 10,
  },
  refreshButton: {
    backgroundColor: colors.colorTransparent,
    borderColor: colors.principalGreen,
    borderWidth: 1,
    borderRadius: 20,
    marginVertical:10
  },
  checkStyle: {
    backgroundColor: colors.colorTransparent,
    borderColor: colors.colorTransparent,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.whiteColor,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonAceptarModal: {
/*    backgroundColor: "green",
    borderColor: colors.colorTransparent,
    borderWidth: 0,
    borderRadius: 20,*/
  },
  buttonCloseModal: {
    backgroundColor: colors.aceptarModalButton,
  },
  textStyleModal: {
    color: colors.whiteColor,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  expiredText: {
    color: colors.redColor,
  },
  infoTitle:{
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    color: "red",
    paddingVertical: 30,
  },
  textInfo: {
   // fontWeight: "bold",
    textAlign: "center",
    color: "#B2ABA4",
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 30,
  },
});
