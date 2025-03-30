min_transaction = 100
qualifying_customers = set()

total_spent = {}

for name, customer_id, amount, date in data:
    
    if customer_id == "N/A":
        continue

    if amount > 100:
        qualifying_customers.add(customer_id)

    if customer_id not in total_spent:
        total_spent[customer_id] = 0.0
    total_spent[customer_id] += amount

qualifying_spend = sum(total_spent[cid] for cid in qualifying_customers)

unique_customers = len(qualifying_customers)

print(f"Number of unique customers: {unique_customers}")
print(f"Total money spent: ${qualifying_spend:.2f}")
