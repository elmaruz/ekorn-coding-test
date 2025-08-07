<script lang="ts">
  import StudentCard from './lib/components/StudentCard.svelte';
  import * as data from './lib/data';
  import * as types from './lib/types';
  import * as utils from './lib/utils';

  export const mapStudentDataItemsToStudents = (
    studentsData: readonly types.StudentDataItem[],
  ): types.Student[] =>
    studentsData.map(student => ({
      id: String(student.id),
      name: `${student.firstName} ${student.lastName}`,
      age: utils.calculateAge(new Date(student.birthdate)),
      averageScore: utils.calculateStudentAverageScore(student.scores),
      activeLabel: student.isActive ? 'Yes' : 'No',
    }));

  const students: types.Student[] = mapStudentDataItemsToStudents(
    data.studentsData,
  );

  // ✅ Filter and sort state
  let showOnlyActive = false;
  let sortOrder: 'asc' | 'desc' = 'asc';

  // ✅ Derived filtered and sorted students
  $: filteredStudents = [...students]
    .filter(student => !showOnlyActive || student.activeLabel === 'Yes')
    .sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) return sortOrder === 'asc' ? -1 : 1;
      if (nameA > nameB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
</script>

<main>
  <div class="students-container">
    <h1>Students</h1>

    <div class="controls">
      <label class="filter-toggle">
        <input type="checkbox" bind:checked={showOnlyActive} />
        Show only active students
      </label>

      <label class="sort-select">
        Sort by name:
        <select bind:value={sortOrder}>
          <option value="asc">A–Z</option>
          <option value="desc">Z–A</option>
        </select>
      </label>
    </div>

    <div class="students-grid">
      {#each filteredStudents as student}
        <StudentCard {student}></StudentCard>
      {/each}
    </div>
  </div>
</main>

<style>
  :global(body) {
    background-color: #efebe5;
    margin: 0;
  }

  main {
    padding: 30px;
    min-height: 100vh;
  }

  .students-container {
    max-width: 1024px;
    margin: 0 auto;
  }

  h1 {
    margin: 0 0 10px 0;
    font-size: 2em;
    font-weight: bold;
    color: #4a3728;
  }

  .controls {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }

  .filter-toggle {
    color: #4a3728;
    font-weight: 500;
  }

  .filter-toggle input {
    margin-right: 10px;
  }

  .sort-select {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    color: #4a3728;
  }

  .sort-select select {
    padding: 6px 10px;
    border-radius: 4px;
    border: 1px solid #bbb;
    font-size: 1em;
    background-color: #fff;
    color: #4a3728;
  }

  .sort-select select:focus {
    border-color: #4a3728;
    outline: none;
  }

  .students-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .students-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .students-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
