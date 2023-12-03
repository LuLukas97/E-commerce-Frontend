import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const shoppingCart = atomWithStorage("shoppingCart", 0);

export const shoppingCartItems = atomWithStorage("checkoutItems", []);
