async function runTests() {
  try {
    console.log('--- Fetching Page 1 ---');
    const res1 = await fetch('http://localhost:5000/api/songs?limit=2');
    const data1 = await res1.json();
    console.log(JSON.stringify(data1, null, 2));

    if (data1.pagination && data1.pagination.nextCursor) {
      console.log('\n--- Fetching Page 2 ---');
      const res2 = await fetch(`http://localhost:5000/api/songs?cursor=${data1.pagination.nextCursor}&limit=2`);
      const data2 = await res2.json();
      console.log(JSON.stringify(data2, null, 2));
    } else {
      console.log('No next cursor found.');
    }
  } catch(e) {
    console.error(e);
  }
}

runTests();
