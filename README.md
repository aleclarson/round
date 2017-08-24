
# round v1.0.0

Round a number to the nearest given number of decimals.

```coffee
round = require "round"

round 1/3, 0  # => 0
round 1/3, 1  # => 0.3
round 1/3, 2  # => 0.33
round 1/3, 3  # => 0.333

# Avoids the common problem of rounding 1.005
round 1.005, 2   # => 1.01
round 1.0049, 2  # => 1
```
