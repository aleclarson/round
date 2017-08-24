
round = require ".."

describe "round()", ->

  it "rounds fractions", ->
    x = 1 / 3
    expect(round x, 1).toBe 0.3
    expect(round x, 2).toBe 0.33
    expect(round x, 3).toBe 0.333
    expect(round x, 4).toBe 0.3333

  # I recommend using `Math.round` for rounding to nearest integer.
  it "can round to nearest integer", ->
    expect(round 0.1, 0).toBe 0
    expect(round 0.5, 0).toBe 1
    expect(round -0.5, 0).toBe -0

  # This is a common problem for other solutions.
  it "rounds 1.005 to 1.01", ->
    expect(round 1.005, 2).toBe 1.01

  # A number ending in repeating 9s with 16 decimals
  # is considered equal to its closest number.
  it "rounds 1.0049999999999999 to 1.01", ->
    x = 1.0049999999999999
    expect(1.005 is x).toBe true
    expect(round x, 2).toBe 1.01

  # However, a number ending in repeating 9s with
  # 15 decimals is not considered equal.
  it "rounds 1.004999999999999 to 1.00", ->
    x = 1.004999999999999
    expect(1.005 is x).toBe false
    expect(round x, 2).toBe 1

  it "does not work with 1e-16 and smaller", ->
    expect(round 1e-15, 15).toBe 1e-15
    expect(round 1e-16, 16).not.toBe 1e-16
    expect(round 1e-17, 17).not.toBe 1e-17
