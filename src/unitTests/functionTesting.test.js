/**
 * @jest-environment jsdom
 */

import { checkPassword, hasLowerCase, hasUpperCase, checkEmail, validateEmail } from "../modules/helper.js";
const puppeteer = require('puppeteer')

test('should return false becease string has no letter in lowercase', () => {
    const result = hasLowerCase("COMPUTER")
    expect(result).toBe(false)
})

test('should return true because string has a letter in lowercase', () => {
    const result = hasLowerCase("COMPUTEr")
    expect(result).toBe(true)
})

test('should return true because string has a letter in lowercase', () => {
    const result = hasLowerCase("computer")
    expect(result).toBe(true)
})

test('should return true becease string has a letter in uppercase', () => {
    const result = hasUpperCase("Computer")
    expect(result).toBe(true)
})

test('should return false because string has no letter in uppercase', () => {
    const result = hasUpperCase("computer")
    expect(result).toBe(false)
})

test('should return true because password is valid', () => {
    const result = checkPassword("Sam123")
    expect(result).toBe(true)
})

test('should return false because no password is provided', () => {
    const result = checkPassword("")
    expect(result).toBe(false)
})

test('should return false because is not a valid email', () => {
    const result = validateEmail("samboers.com")
    expect(result).toBe(false)
})

test('should return true because is a valid email', () => {
    const result = validateEmail("kees.janssen@hotmail.com")
    expect(result).toBe(true)
})

test('should return false because no email is provided', () => {
    const result = checkEmail("")
    expect(result).toBe(false)
})